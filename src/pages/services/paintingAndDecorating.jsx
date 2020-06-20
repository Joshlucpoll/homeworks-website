import React from "react";
import { motion } from "framer-motion";

function PaintingAndDecorating() {
  return (
    <motion.div 
      className="body-wrapper"
      initial={{ x: "-100px", opacity: -1 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100px", opacity: -1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Painting and Decorating</h1>
      <p>Services include:</p>
      <ul>
        <li>Full interior and exterior painting service</li>
        <li>Wall paper stripping and re-plastering</li>
        <li>Wood treatments</li>
        <li>Garden furniture and fencing repainting</li>
        <li>Wall paper hanging</li>
      </ul>
    </motion.div>
  );
}

export default PaintingAndDecorating;