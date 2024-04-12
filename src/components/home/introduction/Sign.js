import React from "react";
import { motion } from "framer-motion";
import "./sign.scss";
import CurveMotion from "./curveMotion";

export default function Sign() {
  return (
    <div className="sign--outer-container">
      <div className="sign--b-container">
        <motion.div
          animate={{
            boxShadow: [
              "0 0 0px blue",
              "0 0 10px blue",
              "0 0 20px blue",
              "0 0 4px blue",
              "0 0 20px blue",
            ],
          }}
          transition={{
            duration: 0.4,
            delay: 0.5,
            ease: [0.3, -0.94, 0.66, 1.99],
          }}
          className="sign--b"
        >
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [1, 0.01, 0.66, 1.47] }}
            className="sign--b--line"
          />
        </motion.div>
        <CurveMotion />
      </div>
      <div className="sign--t-container"></div>
    </div>
  );
}
