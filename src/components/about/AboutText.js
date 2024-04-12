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
            "0 0 10px #6e2fb6",
            "0 0 5px #6e2fb6",
            "0 0 20px #6e2fb6",
            "0 0 30px #6e2fb6",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
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
            "0 0 30px #6e2fb6",
            "0 0 5px #6e2fb6",
            "0 0 30px #6e2fb6",
            "0 0 10px #6e2fb6",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
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
            "0 0 30px #6e2fb6",
            "0 0 25px #6e2fb6",
            "0 0 30px #6e2fb6",
            "0 0 0px #6e2fb6",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
        }}
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
            "0 0 30px #6e2fb6",
            "0 0 5px #6e2fb6",
            "0 0 30px #6e2fb6",
            "0 0 30px #6e2fb6",
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
            "0 0 30px #6e2fb6",
            "0 0 5px #6e2fb6",
            "0 0 30px #6e2fb6",
            "0 0 30px #6e2fb6",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        T
      </motion.span>
    </h2>
  );
};

export default AboutText;
