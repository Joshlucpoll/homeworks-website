import React from "react";
import { motion } from "framer-motion";

function SplitLevelPatio() {
  return (
    <motion.div 
      className="body-wrapper"
      initial={{ y: "100px", opacity: -1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100px", opacity: -1 }}
      transition={{ duration: 0.5 }}
    >

    </motion.div>
  );
}

export default SplitLevelPatio;