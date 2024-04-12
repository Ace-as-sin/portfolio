import React from "react";
import { motion } from "framer-motion";

const BlakeText = () => {
  return (
    <h1>
      <motion.span
        style={{
          textShadow: "0 0 30px red",
          transition: "color 0.5s", // Transition for color change
        }}
        animate={{
          textShadow: [
            "0 0 30px #ff0000", // Red
            "0 0 20px #ff7f00", // Orange
            "0 0 30px #ffff00", // Yellow
            "0 0 30px #00ff00", // Green
            "0 0 20px #0000ff", // Blue
            "0 0 30px #4b0082", // Indigo
            "0 0 30px #9400d3", // Violet
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }} // Add yoyo effect
      >
        B
      </motion.span>
      <motion.span
        style={{
          textShadow: "0 0 30px violet",
          transition: "color 0.5s", // Transition for color change
        }}
        animate={{
          textShadow: [
            "0 0 10px #9400d3", // Violet
            "0 0 20px #ff0000", // Red
            "0 0 30px #ff7f00", // Orange
            "0 0 10px #ffff00", // Yellow
            "0 0 20px #00ff00", // Green
            "0 0 30px #0000ff", // Blue
            "0 0 30px #4b0082", // Indigo
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }} // Add yoyo effect
      >
        l
      </motion.span>
      <motion.span
        style={{
          textShadow: "0 0 30px indigo",
          transition: "color 0.5s", // Transition for color change
        }}
        animate={{
          textShadow: [
            "0 0 5px #4b0082", // Indigo
            "0 0 50px #9400d3", // Violet
            "0 0 30px #ff0000", // Red
            "0 0 20px #ff7f00", // Orange
            "0 0 15px #ffff00", // Yellow
            "0 0 30px #00ff00", // Green
            "0 0 10px #0000ff", // Blue
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }} // Add yoyo effect
      >
        a
      </motion.span>
      <motion.span
        style={{
          textShadow: "0 0 30px blue",
          transition: "color 0.5s", // Transition for color change
        }}
        animate={{
          textShadow: [
            "0 0 30px #0000ff", // Blue
            "0 0 25px #4b0082", // Indigo
            "0 0 30px #9400d3", // Violet
            "0 0 35px #ff0000", // Red
            "0 0 25px #ff7f00", // Orange
            "0 0 30px #ffff00", // Yellow
            "0 0 35px #00ff00", // Green
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }} // Add yoyo effect
      >
        k
      </motion.span>
      <motion.span
        style={{
          textShadow: "0 0 30px green",
          transition: "color 0.5s", // Transition for color change
        }}
        animate={{
          textShadow: [
            "0 0 30px #00ff00", // Green
            "0 0 20px #0000ff", // Blue
            "0 0 30px #4b0082", // Indigo
            "0 0 40px #9400d3", // Violet
            "0 0 30px #ff0000", // Red
            "0 0 20px #ff7f00", // Orange
            "0 0 30px #ffff00", // Yellow
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }} // Add yoyo effect
      >
        e
      </motion.span>
    </h1>
  );
};

export default BlakeText;
