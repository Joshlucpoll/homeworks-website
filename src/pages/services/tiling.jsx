import React from "react";
import { motion } from "framer-motion";

function Tiling() {
  return (
    <motion.div 
      className="body-wrapper"
      initial={{ x: "-100px", opacity: -1 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100px", opacity: -1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Tiling</h1>
      <p>At Homeworks we offer a range of wall and floor tiling services.  These include:</p>
      <ul>
        <li>Making good damaged walls prior to tiling</li>
        <li>Levelling of floors prior to floor tiling</li>
        <li>Wall and floor tiling in ceramic and natural stone</li>
        <li>Repairs to existing tiling</li>
        <li>Installation of moisture-resistant plasterboards and aqua boards in bathrooms and wet rooms</li>
      </ul>
    </motion.div>
  );
}

export default Tiling;