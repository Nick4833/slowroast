import Info from "@/components/Landing/Info";
import Container from "@/components/Shop/Container";
import Filter from "@/components/Shop/Filter";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";
import commerce from "../lib/commerce";

export async function getStaticProps() {
  const grindProducts = await commerce.products.list({
    category_slug: "grind",
  });
  const icedProducts = await commerce.products.list({
    category_slug: "iced-coffee",
  });

  return {
    props: {
      grindProducts,
      icedProducts,
    },
  };
}

const Shop = ({
  grindProducts,
  icedProducts,
}: {
  grindProducts: any;
  icedProducts: any;
}) => {
  const [current, setCurrent] = useState("grind");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (current === "grind") {
      setProducts(grindProducts.data);
    } else if (current === "iced-coffee") {
      setProducts(icedProducts.data);
    }
  }, [, current]);

  const filterChange = (filter: string) => setCurrent(filter);
  return (
    <>
      <Head>
        <title>slowroast - Cofee</title>
        <meta
          name="description"
          content="slowroast : coffee slowroasted to perfection. Unique small-lot coffees from our globe-spanning network of artisan
            producers, roasted to perfection and delivered to you each month."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col gap-12">
        <div>
          <div className="pt-36 pb-28 w-full h-64 bg-no-repeat bg-cover grid p-6 md:px-20 text-darkgreen items-end justify-items-start bg-secondary">
            <h1 className="text-4xl lg:text-6xl font-semibold">
              Shop <span className="text-red-900">COFFEE +</span>{" "}
            </h1>
          </div>
          <div className="">
            <Filter filterChange={filterChange} current={current} />
          </div>
        </div>
        <AnimatePresence>
          <Container products={products} />
        </AnimatePresence>
        <Info />
      </main>
    </>
  );
};

export default Shop;
