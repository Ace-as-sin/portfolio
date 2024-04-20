import React from "react";
import "./contact.scss";
import ContactText from "./ContactText";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="contact--outer-container">
      <ContactText />
      <div className="contact--text-container">
        <p>
          Want to reach out, or interested in knowing more? feel free to reach me
          at any of these places. Maybe share your favorite game, book, or
          project with me!
        </p>
        <ul>
          <li>
            Email:{" "}
            <motion.a
              href="mailto:BlakeTrapnell.dev@gmail.com"
              target="_blank no-referrer no-opener"
              style={{ textShadow: "none" }}
              animate={{
                textShadow: [
                  "0 0 30px #ff0000", // Red
                  "0 0 30px #ff7f00", // Orange
                  "0 0 30px #ffff00", // Yellow
                  "0 0 30px #00ff00", // Green
                  "0 0 30px #0000ff", // Blue
                  "0 0 30px #4b0082", // Indigo
                  "0 0 30px #9400d3", // Violet
                  "0 0 30px #ff0000", // Red
                ],
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            >
              BlakeTrapnell.dev@gmail.com
            </motion.a>
          </li>
          <li>
            Phone:{" "}
            <motion.a
              animate={{
                textShadow: [
                  "0 0 30px #ff0000", // Red
                  "0 0 30px #ff7f00", // Orange
                  "0 0 30px #ffff00", // Yellow
                  "0 0 30px #00ff00", // Green
                  "0 0 30px #0000ff", // Blue
                  "0 0 30px #4b0082", // Indigo
                  "0 0 30px #9400d3", // Violet
                  "0 0 30px #ff0000", // Red
                ],
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
              href="tel:+18018504977"
              target="_blank no-referrer no-opener"
            >
              +1(801)850-4977
            </motion.a>
          </li>
          <li>
            {" "}
            github:{" "}
            <motion.a
              animate={{
                textShadow: [
                  "0 0 30px #ff0000", // Red
                  "0 0 30px #ff7f00", // Orange
                  "0 0 30px #ffff00", // Yellow
                  "0 0 30px #00ff00", // Green
                  "0 0 30px #0000ff", // Blue
                  "0 0 30px #4b0082", // Indigo
                  "0 0 30px #9400d3", // Violet
                  "0 0 30px #ff0000", // Red
                ],
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 3 }}
              href="https://github.com/ace-as-sin"
              target="_blank no-referrer no-opener"
            >
              github.com/ace-as-sin
            </motion.a>
          </li>
          <li>
            linkedin:{" "}
            <motion.a
              animate={{
                textShadow: [
                  "0 0 30px #ff0000", // Red
                  "0 0 30px #ff7f00", // Orange
                  "0 0 30px #ffff00", // Yellow
                  "0 0 30px #00ff00", // Green
                  "0 0 30px #0000ff", // Blue
                  "0 0 30px #4b0082", // Indigo
                  "0 0 30px #9400d3", // Violet
                  "0 0 30px #ff0000", // Red
                ],
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 4 }}
              href="https://www.linkedin.com/in/blake-trapnell-0b526495/"
              target="_blank no-referrer no-opener"
            >
              https://www.linkedin.com/in/blake-trapnell-0b526495/
            </motion.a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
