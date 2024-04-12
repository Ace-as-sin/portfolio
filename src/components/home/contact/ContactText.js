import React from "react";
import { motion } from "framer-motion";

const ContactText = () => {
  return (
    <h2 id="contact">
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
        C
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
        N
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
        T
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
            "0 0 30px #6e2fb6",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        C
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

export default ContactText;
