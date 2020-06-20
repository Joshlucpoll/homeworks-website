import React from "react";
import { motion } from "framer-motion";

function Plumbing() {
  return (
    <motion.div 
      className="body-wrapper"
      initial={{ y: "100px", opacity: -1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100px", opacity: -1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Plumbing</h1>
      <ul>
        <li>New installations and re-siting</li>
        <li>Cure drips and leaks</li>
        <li>Tap problems, kitchen sinks, wash basins, waste traps and waste pipes, isolator valves</li>
        <li>WC faults, inlet valves, siphons</li>
        <li>Radiators, radiator valves, heating programmers, thermostats</li>
      </ul>
    </motion.div>
  );
}

export default Plumbing;