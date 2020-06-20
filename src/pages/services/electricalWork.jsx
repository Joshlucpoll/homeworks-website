import React from "react";
import { motion } from "framer-motion";


function ElectricalWork() {
  return (
    <motion.div 
      className="body-wrapper"
      initial={{ y: "100px", opacity: -1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100px", opacity: -1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Electrical Work</h1>
      <p>We have qualified craftsmen who are able to meet all your domestic electrical needs. From fault-finding and repairs to a full house re-wire, no job is too small.</p>
      <ul>
        <li>Electrical maintenance and fault-finding</li>
        <li>Lighting, electrical sockets, switches, pull cords, consumer units</li>
        <li>Security and smoke alarm fitting</li>
        <li>Heating and boiler controls</li>
        <li>Periodic inspection and testing</li>
        <li>Additions and alterations</li>
        <li>PAT testing</li>
        <li>Installation of electrical appliances</li>
        <li>Electric showers, extractors and heaters</li>
      </ul>
    </motion.div>
  );
}

export default ElectricalWork;