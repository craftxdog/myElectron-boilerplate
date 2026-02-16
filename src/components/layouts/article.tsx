import { motion } from "framer-motion";
import useDocumentHead from "../../lib/head";
import type { PropsWithChildren } from "react";
// import { GridItemStyle } from '../grid-item';

type LayoutProps = PropsWithChildren<{
  title?: string;
}>;

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

export default function Layout({ children, title }: LayoutProps) {
  useDocumentHead(title);
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "keyframes" }}
      style={{ position: "relative" }}
    >
      <>
        {children}
        {/* <GridItemStyle /> */}
      </>
    </motion.article>
  );
}
