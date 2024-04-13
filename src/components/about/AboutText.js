import React from "react";
import { motion } from "framer-motion";

const AboutText = () => {
  return (
    <h2 id="about">
      <motion.span
        style={{
          textShadow: "0 0 30px #6e2fb6",
          transition: "color 0.5s", // Transition for color change
        }}
        animate={{
          textShadow: [
            "0 0 40px #6e2fb6",
            "0 0 10px #6e2fb6",
            "0 0 40px #6e2fb6",
            "0 0 10px #6e2fb6",
            "0 0 40px #6e2fb6",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        A
      </motion.span>
      <motion.span
        style={{
          textShadow: "0 0 30px #6e2fb6",
          transition: "color 0.5s", // Transition for color change
        }}
        animate={{
          textShadow: [
            "0 0 40px #6e2fb6",
            "0 0 10px #6e2fb6",
            "0 0 40px #6e2fb6",
            "0 0 10px #6e2fb6",
            "0 0 40px #6e2fb6",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        B
      </motion.span>
      <motion.span
        style={{
          textShadow: "0 0 30px #6e2fb6",
          transition: "color 0.5s", // Transition for color change
        }}
        animate={{
          textShadow: [
            "0 0 40px #6e2fb6",
            "0 0 10px #6e2fb6",
            "0 0 40px #6e2fb6",
            "0 0 10px #6e2fb6",
            "0 0 40px #6e2fb6",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        O
      </motion.span>
      <motion.span
        style={{
          textShadow: "0 0 30px #6e2fb6",
          transition: "color 0.5s", // Transition for color change
        }}
        animate={{
          textShadow: [
            "0 0 40px #6e2fb6",
            "0 0 10px #6e2fb6",
            "0 0 40px #6e2fb6",
            "0 0 10px #6e2fb6",
            "0 0 40px #6e2fb6",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        U
      </motion.span>
      <motion.span
        style={{
          textShadow: "0 0 30px #6e2fb6",
          transition: "color 0.5s", // Transition for color change
        }}
        animate={{
          textShadow: [
            "0 0 40px #6e2fb6",
            "0 0 10px #6e2fb6",
            "0 0 40px #6e2fb6",
            "0 0 10px #6e2fb6",
            "0 0 40px #6e2fb6",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        T
      </motion.span>
    </h2>
  );
};

export default AboutText;
