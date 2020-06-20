import React from "react";
import { motion } from "framer-motion";

function Kitchens() {
  return (
    <motion.div 
      className="body-wrapper"
      initial={{ x: "-100px", opacity: -1 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100px", opacity: -1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Kitchen Installation &amp; refurbishment</h1>
      <p>Homeworks offers a full kitchen fitting service from design to completion of installation. If you have a design already in mind or need some help deciding what to have in your dream kitchen, we can be of assistance. We can supply and fit a kitchen or fit only if that’s what you need.</p>
      <h2>Services include:</h2>
      <ul>
        <li>Full installation of flatpack or solid carcase kitchens</li>
        <li>Installation of worktops</li>
        <li>All plumbing work including connection of gas appliances</li>
        <li>All electrical work including lighting and the fitting and connection of appliances and extractors</li>
        <li>Wall and floor tiling</li>
      </ul>
    </motion.div>
  );
}

export default Kitchens;