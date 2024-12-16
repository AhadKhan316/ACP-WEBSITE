import React from "react";
import { motion } from "framer-motion";

const MotionWrapper = ({
  children,
  initial = { opacity: 0, y: 50 },
  whileInView = { opacity: 1, y: 0 },
  viewport = { once: true },
  transition = { duration: 0.8, ease: "easeOut" },
}) => {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
