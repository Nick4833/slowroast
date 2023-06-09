import commerce from '../lib/commerce'
import Head from 'next/head'
import Hero from '@/components/Landing/Hero'
import Quote from '@/components/Landing/Quote'
import New from '@/components/Landing/New'
import Info from '@/components/Landing/Info'
import Cold from '@/components/Landing/Cold'
import Mission from '@/components/Landing/Mission'
import Social from '@/components/Landing/Social'
import Marquee from 'react-fast-marquee'


export async function getStaticProps() {
  const newProducts = await commerce.products.list({limit: 3, category_slug: 'grind'})
  const iceProducts = await commerce.products.list({limit: 4, category_slug: 'iced-coffee'})

  return {
    props: {
      newProducts,
      iceProducts
    }
  }
}

export default function Home({newProducts, iceProducts}: {newProducts: any, iceProducts: any}) {
  return (
    <>
      <Head>
        <title>slowroast - Cofee</title>
        <meta name="description" content="slowroast : coffee slowroasted to perfection. Unique small-lot coffees from our globe-spanning network of artisan
            producers, roasted to perfection and delivered to you each month." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex flex-col gap-36'>
        <Hero />
        <Quote />
        <New products={newProducts.data}/>
        
        <Info />
        <Cold products={iceProducts.data}/>
        <Mission />
        <Social />
      </main>
    </>
  )
}
