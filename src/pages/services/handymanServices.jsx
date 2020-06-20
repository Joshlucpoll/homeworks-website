import React from "react";
import { motion } from "framer-motion";

function HandymanServices() {
  return (
    <motion.div 
      className="body-wrapper"
      initial={{ x: "-100px", opacity: -1 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100px", opacity: -1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Handyman Service</h1>
      <p>Homeworks offers a handyman service for all those minor jobs around the house that you never seem able to get around to. We offer either an hourly basis or a fixed daily rate. We cover most minor jobs found in the home – here are some of the handyman services that we provide:</p>
      <ul>
        <li>Assembly of flat pack furniture</li>
        <li>Installation of curtain rails or blinds</li>
        <li>Hanging of pictures or photos</li>
        <li>Putting up shelves or mirrors</li>
        <li>Re-sealing around bath/basin/shower with silicone sealant</li>
        <li>Re-grouting tiles in bathrooms and shower rooms</li>
        <li>Changing light bulbs in hard to reach areas</li>
        <li>Fitting outside taps</li>
        <li>Re-glazing of broken windows and putty repairs</li>
        <li>Freeing up sticking doors or windows</li>
        <li>Repair or installation of exterior fencing and gates</li>
        <li>Clearance of guttering and down-pipes</li>
        <li>Changing of electrical light fittings and switches</li>
      </ul>
      <p>If the job you need doing isn’t in the list above, don’t worry! The chances are we are able to sort it out for you. Call us to discuss your needs.</p>


    </motion.div>
  );
}

export default HandymanServices;