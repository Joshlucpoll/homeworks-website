import React from "react";
import {  motion } from "framer-motion";


function Bathrooms() {
  return (
    <motion.div 
      className="body-wrapper"
      initial={{ y: "100px", opacity: -1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100px", opacity: -1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Bathroom Installation & refurbishment</h1>
      <p>
        At Homeworks we offer a full bathroom design and fitting service – including all plumbing, electrical and tiling works. Whether you need to replace a cracked basin or want a bathroom to die for, we are able to meet your needs.
        We can offer a supply and fit or fit only service.
      </p>

    </motion.div>
  );
}

export default Bathrooms;