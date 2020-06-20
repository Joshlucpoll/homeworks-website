import React from "react";
import { motion } from "framer-motion";

function KitchenInstallation() {
  return (
    <motion.div 
      className="body-wrapper"
      initial={{ x: "-100px", opacity: -1 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100px", opacity: -1 }}
      transition={{ duration: 0.5 }}
    >

    </motion.div>
  );
}

export default KitchenInstallation;