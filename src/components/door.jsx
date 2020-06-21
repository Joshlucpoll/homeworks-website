import React from "react";
import { motion } from "framer-motion";

function Door(props) {
  return (
    <svg 
      className={props.class}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 340 640" width="340" height="640">
      <defs>
        {/* Frame */}
        <motion.path 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
          d="M320 20L320 620L20 620L20 20L320 20Z" id="a1qFs6fEHy">
        </motion.path>
        {/* Window left */}
        <motion.path 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.4 }}
          d="M150 50L150 350L50 350L50 50L150 50Z" id="c16qsZsUns">
        </motion.path>
        {/* Window right */}
        <motion.path 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.6 }}
          d="M290 50L290 350L190 350L190 50L290 50Z" id="c64PDoWnug">
        </motion.path>
        {/* Letter box */}
        <motion.path 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
          d="M217.34 383.95C218.81 383.95 220 385.14 220 386.61C220 390.07 220 397.82 220 401.29C220 402.76 218.81 403.95 217.34 403.95C197.88 403.95 142.13 403.95 122.66 403.95C121.19 403.95 120 402.76 120 401.29C120 397.82 120 390.07 120 386.61C120 385.14 121.19 383.95 122.66 383.95C142.13 383.95 197.88 383.95 217.34 383.95Z" id="asC3US8tk">
        </motion.path>
        {/* Outer bottom left */}
        <motion.path 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.6 }}
          d="M50 569.31L150 569.31L150 469.31L50 469.31L50 569.31Z" id="b6ppqEV5a">
        </motion.path>
        {/* Inner bottom left */}
        <motion.path 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 2 }}
          d="M55 564.31L145 564.31L145 474.31L55 474.31L55 564.31Z" id="agIws7XBc">
        </motion.path>
        {/* Door knob */}
        <motion.path 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
          d="M303.43 393.95C303.43 401.14 297.41 406.97 290 406.97C282.59 406.97 276.57 401.14 276.57 393.95C276.57 386.76 282.59 380.93 290 380.93C297.41 380.93 303.43 386.76 303.43 393.95Z" id="j5uWUmtk0O">
        </motion.path>
        {/* Outer bottom right */}
        <motion.path 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.8 }}
          d="M190 569.31L290 569.31L290 469.31L190 469.31L190 569.31Z" id="f5aCTppgvO">
        </motion.path>
        {/* Inner bottom right */}
        <motion.path 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 2.2 }}
          d="M195 564.31L285 564.31L285 474.31L195 474.31L195 564.31Z" id="c9Ckjm3F9">
        </motion.path>
        {/* Window reflections */}
        <motion.path 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ flip: Infinity, duration: 2, delay: 1.4 }}
          d="M62.5 131.81L112.5 88.75" id="gr5Q2eWkQ">
        </motion.path>
        <motion.path 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ flip: Infinity, duration: 2.2, delay: 1.3 }}
          d="M87.5 210.14L137.5 167.08" id="c1JVdujOGU">
        </motion.path>
        <motion.path 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ flip: Infinity, duration: 2.4, delay: 1.2 }}
          d="M202.5 192.5L252.5 149.44" id="a4bkERf6Fu">
        </motion.path>
        <motion.path 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ flip: Infinity, duration: 2.5, delay: 1 }}
          d="M227.5 270.83L277.5 227.78" id="aSUu5to21">
        </motion.path>
      </defs>
      <g>
        <g>
          <g>
            <g>
              <use xlinkHref="#a1qFs6fEHy" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="12" stroke-opacity="1"></use>
            </g>
          </g>
          <g>
            <g>
              <use xlinkHref="#c16qsZsUns" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="5" stroke-opacity="1"></use>
            </g>
          </g>
          <g>
            <g>
              <use xlinkHref="#c64PDoWnug" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="5" stroke-opacity="1"></use>
            </g>
          </g>
          <g>
            <use xlinkHref="#asC3US8tk" opacity="1" fill="#000000" fill-opacity="1"></use>
            <g>
              <use xlinkHref="#asC3US8tk" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="2" stroke-opacity="1"></use>
            </g>
          </g>
          <g>
            <g>
              <use xlinkHref="#b6ppqEV5a" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="2" stroke-opacity="1"></use>
            </g>
          </g>
          <g>
            <g>
              <use xlinkHref="#agIws7XBc" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="2" stroke-opacity="1"></use>
            </g>
          </g>
          <g>
            <use xlinkHref="#j5uWUmtk0O" opacity="1" fill="#000000" fill-opacity="1"></use>
          </g>
          <g>
            <g>
              <use xlinkHref="#f5aCTppgvO" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="2" stroke-opacity="1"></use>
            </g>
          </g>
          <g>
            <g>
              <use xlinkHref="#c9Ckjm3F9" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="2" stroke-opacity="1"></use>
            </g>
          </g>
          <g>
            <g>
              <use xlinkHref="#gr5Q2eWkQ" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="1"></use>
            </g>
          </g>
          <g>
            <g>
              <use xlinkHref="#c1JVdujOGU" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="1"></use>
            </g>
          </g>
          <g>
            <g>
              <use xlinkHref="#a4bkERf6Fu" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="1"></use>
            </g>
          </g>
          <g>
            <g>
              <use xlinkHref="#aSUu5to21" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="1"></use>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Door;