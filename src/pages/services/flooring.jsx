import React from "react";
import { motion } from "framer-motion";

function Flooring() {
  return (
    <motion.div 
      className="body-wrapper"
      initial={{ x: "-100px", opacity: -1 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100px", opacity: -1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Flooring</h1>
      <p>Homeworks has long experience of fitting laminate and real wood engineered floors. We can offer a supply and fit or fit only service. If you are considering an exposed wood floor, we are also able to repair and restore traditional tongue and grooved flooring in a sympathetic way, matching replacement timber to existing floorboards. We can sand and finish flooring to suit your requirements.</p>
      <p>We offer the supply and installation of the following floor types:</p>
      <ul>
        <li>Click lock laminate flooring</li>
        <li>Real wood flooring</li>
        <li>Parquet flooring</li>
        <li>Tongue and grooved softwood and hardwood flooring</li>
      </ul>
    </motion.div>
  );
}

export default Flooring;