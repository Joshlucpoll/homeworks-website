import React from "react";
import { motion } from "framer-motion";

function GeneralRepairs() {
  return (
    <motion.div 
      className="body-wrapper"
      initial={{ x: "-100px", opacity: -1 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100px", opacity: -1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>General Property Repairs</h1>
      <ul>
        <li>Slabbing and patio construction</li>
        <li>Construction of sheds and summer houses</li>
        <li>Fitting of security grids to windows</li>
        <li>Secondary glazing</li>
        <li>Supply and fitting of timber windows and doors</li>
        <li>Installation and repair of guttering systems and down-pipes</li>
        <li>Loft insulation</li>
        <li>Lock fitting to windows and doors</li>
      </ul>
      <p>From a one-off to full maintenance contracts.. no job is too small</p>
    </motion.div>
  );
}

export default GeneralRepairs;