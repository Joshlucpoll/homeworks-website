import React from "react";
import { motion } from "framer-motion";

import Logo from "../assets/img/homeworks-title.png";
import HammerSpanner from "../assets/img/hammer-spanner.png"
import Window from "../components/window";
import Door from "../components/door";
import "../styles/home.scss";

function Home() {
  return(
    <motion.div 
      className="body-wrapper"
      initial={{ x: "-100px", opacity: -1 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100px", opacity: -1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="headline-container">
        <motion.div 
          className="back-window-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }} 
          transition={{ duration: 2, delay: 2 }}/>
        <motion.div 
          className="back-window-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }} 
          transition={{ duration: 2, delay: 2 }}/>
        <Window class="window-left" delay={0}/>
        <Window class="window-right" delay={0}/>
        <motion.img
          className="title"
          src={Logo}
          alt="logo"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        />
        <motion.div
          className="subtitle"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
        >
          PROPERTY IMPROVEMENTS
        </motion.div>
        <motion.div 
          className="back-door"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }} 
          transition={{ duration: 2, delay: 2 }}
          />
        <Door class="door"/>
        <div className="door-action"></div>
      </div>
      <div className="intro-container">
        {/* <div className="img-container">
          <img src={HammerSpanner} alt="Hammer and Spanner" className="hammer-spanner"/>
        </div> */}
        <div className="intro-info-container">
          <p className="intro-info">If you are looking for a friendly, professional and reliable service for all your property maintenance and renovation requirements, then call on the experts at Homeworks Property Improvements.</p>
        </div>
      </div>
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

export default Home;