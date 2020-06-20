import React from "react";
import { motion } from "framer-motion";

function SashWindows() {
  return (
    <motion.div 
      className="body-wrapper"
      initial={{ y: "100px", opacity: -1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100px", opacity: -1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Sash Window Restoration and Upgrading</h1>
      <p>At Homeworks we have a real enthusiasm for period properties and in particular we have a fondness for traditional box sash windows. We have a wealth of knowledge in the window restoration trade and are able to offer a wide range of sash window and casement window repair services.  We can give you a cost effective alternative to purchasing entirely new sets of traditional wooden and sash windows.  You can upgrade your existing windows and have them working like new!</p>
    </motion.div>
  );
}

export default SashWindows;