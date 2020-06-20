import React from "react";
import { motion } from "framer-motion";

function Plastering() {
  return (
    <motion.div 
      className="body-wrapper"
      initial={{ y: "100px", opacity: -1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100px", opacity: -1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Plastering</h1>
      <p>Homeworks specialise in a range of plastering services. These include:</p>
      <ul>
        <li>Plastering repair and patching up</li>
        <li>Plaster board installation and dot and dab boarding</li>
        <li>Stud and partition walls built or removed</li>
        <li>Removal of Artex finishes via re-skimming</li>
        <li>Plaster rose and moulding installations</li>
        <li>Overboarding and skimming of ceilings</li>
        <li>External rendering and repairs</li>
      </ul>
    </motion.div>
  );
}

export default Plastering;