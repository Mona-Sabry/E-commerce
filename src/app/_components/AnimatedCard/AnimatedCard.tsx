'use client';

import { motion } from "framer-motion";

export default function AnimatedCard({
  children,
  className,
  direction = "left",
}: any) {

  const variants = {
    hidden: {
      x: direction === "left" ? -80 : 80,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
       whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}