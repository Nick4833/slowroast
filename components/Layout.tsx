import { motion } from "framer-motion";

const Layout = ({ children, keyMotion }: { children: any, keyMotion: any }) => {
  return (
    <motion.div
    key={keyMotion}
      initial={{
        y: 20,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: 20,
        opacity: 0,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
