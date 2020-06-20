import React from "react";
import { motion } from "framer-motion";

import "../styles/services.scss";

function Contact() {
  return(
    <motion.div 
      className="body-wrapper"
      initial={{ y: "100px", opacity: -1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100px", opacity: -1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Why Choose Homeworks?</h1>
      <p>
        If you are looking for a friendly, professional and reliable service for all your property maintenance and renovation requirements, then call on the experts at Homeworks Property Improvements.
      </p>
      <p>
        We provide comprehensive property maintenance, repair and refurbishment services. With years of experience in the trade and 10 years as an established company we have the skills and knowledge to make any job run smoothly. From our base in Syston we can cover the whole of Leicestershire, responding rapidly and working efficiently to complete work to schedule and within budget.
      </p>
      <p>
        With no call-out fees, free estimates and highly competitive rates, Homeworks Property Improvements provides a professional service that doesn’t break the bank. No matter how large or small the project we pride ourselves on giving total dedication to every job with the aim of ensuring total customer satisfaction.
      </p>
      <hr/>
      <h2>What we offer</h2>
      <p>
        If you want property improvements in Leicestershire then we can help. Whether you need a minor repair or a full house refurbishment we are able to undertake the work using skilled craftsmen at a very competitive price. No job is ever too small. Our aim is to provide a one-stop shop for clients – no more hours wasted searching for reliable and affordable tradesmen.
      </p>
    </motion.div>
  );
}

export default Contact;