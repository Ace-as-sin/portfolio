import React from "react";
import { motion } from "framer-motion";

const ProjectText = () => {
  return (
    <h2>
      <motion.span
        style={{
          textShadow: "0 0 30px red",
          transition: "color 0.5s", // Transition for color change
        }}
        animate={{
          textShadow: [
            "0 0 30px red",
            "0 0 5px red",
            "0 0 30px red",
            "0 0 30px red",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        P
      </motion.span>
      <motion.span
        style={{
          textShadow: "0 0 30px red",
          transition: "color 0.5s", // Transition for color change
        }}
        animate={{
          textShadow: [
            "0 0 30px red",
            "0 0 5px red",
            "0 0 30px red",
            "0 0 30px red",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        R
      </motion.span>
      <motion.span
        style={{
          textShadow: "0 0 30px red",
          transition: "color 0.5s", // Transition for color change
        }}
        animate={{
          textShadow: [
            "none",
            "none",
            "none",
            "none",
            "none",
            "none",
            "none",
            "none",
            "none",
            "none",
            "none",
            "0 0 20px red",
            "none",
            "0 0 20px red",
            "0 0 20px red",
            "0 0 20px red",
            "0 0 20px red",
            "0 0 20px red",
            "0 0 20px red",
            "0 0 20px red",
            "0 0 20px red",
            "0 0 20px red",
            "0 0 20px red",
            "none",
            "0 0 20px red",
            "none",
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
          textShadow: "0 0 30px red",
          transition: "color 0.5s", // Transition for color change
        }}
        animate={{ textShadow: ["0 0 30px red", "0 0 5px red"] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        J
      </motion.span>
      <motion.span
        style={{
          textShadow: "0 0 30px red",
          transition: "color 0.5s", // Transition for color change
        }}
        animate={{
          textShadow: [
            "0 0 30px red",
            "0 0 5px red",
            "0 0 30px red",
            "0 0 30px red",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        E
      </motion.span>
      <motion.span
        style={{
          textShadow: "0 0 30px red",
          transition: "color 0.5s", // Transition for color change
        }}
        animate={{
          textShadow: [
            "none",
            "none",
            "none",
            "none",
            "none",
            "0 0 30px red",
            "0 0 30px red",
            "0 0 30px red",
            "0 0 30px red",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        C
      </motion.span>
      <motion.span
        style={{
          textShadow: "0 0 30px red",
          transition: "color 0.5s", // Transition for color change
        }}
        animate={{ textShadow: ["0 0 30px red", "0 0 5px red"] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        T
      </motion.span>
      <motion.span
        style={{
          textShadow: "0 0 30px red",
          transition: "color 0.5s", // Transition for color change
        }}
        animate={{
          textShadow: [
            "0 0 30px red",
            "0 0 5px red",
            "0 0 30px red",
            "0 0 30px red",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        S
      </motion.span>
    </h2>
  );
};

export default ProjectText;
