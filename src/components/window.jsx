import React from "react";
import { motion } from "framer-motion";

function Window(props) {
  const delay = props.delay
  return (
    <svg
			className={props.class}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 640 640"
      width="300"
      height="300"
    >
      <defs>
        {/* Window frame */}
        <motion.path 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: (delay + 1) }}

          d="M560 7.63L560 635.38L80 635.38L80 7.63L560 7.63Z"
          id="i3KzLbK08B"
        ></motion.path>
        {/* Middle bar */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: (delay + 1.2) }}

          d="M560 321.51L80 321.51" id="d2TnTA47Fd"
         ></motion.path>
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: (delay + 1) }}
        
          d="" id="biUgis3Hl"
        ></motion.path>
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: (delay + 1) }}

          d="" id="aE6lQjmaS"
        ></motion.path>
        {/* Left circle */}
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: (delay + 1.3) }}

          d="M102.86 329.92C102.86 337.67 96.45 343.96 88.54 343.96C80.64 343.96 74.22 337.67 74.22 329.92C74.22 322.17 80.64 315.87 88.54 315.87C96.45 315.87 102.86 322.17 102.86 329.92Z"
          id="hhJllx9wB"
        ></motion.path>
        {/* Left squircle */}
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: (delay + 1.4) }}

          d="M88.88 338.74C91.51 338.74 93.64 340.87 93.64 343.5C93.64 346.36 93.64 350.17 93.64 353.02C93.64 355.65 91.51 357.79 88.88 357.79C85.95 357.79 81.92 357.79 78.99 357.79C76.36 357.79 74.22 355.65 74.22 353.02C74.22 350.17 74.22 346.36 74.22 343.5C74.22 340.87 76.36 338.74 78.99 338.74C81.92 338.74 85.95 338.74 88.88 338.74Z"
          id="c5V4SNuEb"
        ></motion.path>
        {/* Right circle */}
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: (delay + 1.5) }}

          d="M537.1 329.62C537.1 337.37 543.52 343.67 551.42 343.67C559.33 343.67 565.74 337.37 565.74 329.62C565.74 321.87 559.33 315.58 551.42 315.58C543.52 315.58 537.1 321.87 537.1 329.62Z"
          id="b18O0x8ELO"
        ></motion.path>
        {/* Right squircle */}
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: (delay + 1.6) }}

          d="M551.09 338.44C548.46 338.44 546.33 340.58 546.33 343.21C546.33 346.06 546.33 349.87 546.33 352.73C546.33 355.36 548.46 357.49 551.09 357.49C554.02 357.49 558.05 357.49 560.98 357.49C563.61 357.49 565.74 355.36 565.74 352.73C565.74 349.87 565.74 346.06 565.74 343.21C565.74 340.58 563.61 338.44 560.98 338.44C558.05 338.44 554.02 338.44 551.09 338.44Z"
          id="beQ5G76HF"
        ></motion.path>
        {/* Window reflections */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ flip: Infinity, duration: 2, delay: (delay + 1.7) }}

          d="M177.42 157.59L219.4 113.97" id="f7NncU79DX"
        ></motion.path>
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ flip: Infinity, duration: 2.1, delay: (delay + 2) }}

          d="M257.33 258.55L387.21 137.67" id="b1s2P3OOoR"
        ></motion.path>
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ flip: Infinity, duration: 2.2, delay: (delay + 2.3) }}

          d="M212.08 462.31L254.07 418.69" id="a2wycwMrKo"
        ></motion.path>
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ flip: Infinity, duration: 2.3, delay: (delay + 2.6) }}

          d="M292 563.27L421.87 442.39" id="fa0WUCMiB"
        ></motion.path>
      </defs>
      <g>
        <g>
          <g>
            <g>
              <use
                xlinkHref="#i3KzLbK08B"
                opacity="1"
                fill-opacity="0"
                stroke="#000000"
                stroke-width="24"
                stroke-opacity="1"
              ></use>
            </g>
          </g>
          <g>
            <g>
              <use
                xlinkHref="#d2TnTA47Fd"
                opacity="1"
                fill-opacity="0"
                stroke="#000000"
                stroke-width="12"
                stroke-opacity="1"
              ></use>
            </g>
          </g>
          <g>
            <g>
              <use
                xlinkHref="#biUgis3Hl"
                opacity="1"
                fill-opacity="0"
                stroke="#000000"
                stroke-width="12"
                stroke-opacity="1"
              ></use>
            </g>
          </g>
          <g>
            <g>
              <use
                xlinkHref="#aE6lQjmaS"
                opacity="1"
                fill-opacity="0"
                stroke="#000000"
                stroke-width="12"
                stroke-opacity="1"
              ></use>
            </g>
          </g>
          <g>
            <use
              xlinkHref="#hhJllx9wB"
              opacity="1"
              fill="#000000"
              fill-opacity="1"
            ></use>
          </g>
          <g>
            <use
              xlinkHref="#c5V4SNuEb"
              opacity="1"
              fill="#000000"
              fill-opacity="1"
            ></use>
          </g>
          <g>
            <use
              xlinkHref="#b18O0x8ELO"
              opacity="1"
              fill="#000000"
              fill-opacity="1"
            ></use>
          </g>
          <g>
            <use
              xlinkHref="#beQ5G76HF"
              opacity="1"
              fill="#000000"
              fill-opacity="1"
            ></use>
          </g>
          <g>
            <g>
              <use
                xlinkHref="#f7NncU79DX"
                opacity="1"
                fill-opacity="0"
                stroke="#000000"
                stroke-width="1"
                stroke-opacity="1"
              ></use>
            </g>
          </g>
          <g>
            <g>
              <use
                xlinkHref="#b1s2P3OOoR"
                opacity="1"
                fill-opacity="0"
                stroke="#000000"
                stroke-width="1"
                stroke-opacity="1"
              ></use>
            </g>
          </g>
          <g>
            <g>
              <use
                xlinkHref="#a2wycwMrKo"
                opacity="1"
                fill-opacity="0"
                stroke="#000000"
                stroke-width="1"
                stroke-opacity="1"
              ></use>
            </g>
          </g>
          <g>
            <g>
              <use
                xlinkHref="#fa0WUCMiB"
                opacity="1"
                fill-opacity="0"
                stroke="#000000"
                stroke-width="1"
                stroke-opacity="1"
              ></use>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Window;
