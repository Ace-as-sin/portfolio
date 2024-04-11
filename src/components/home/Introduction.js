import { motion } from "framer-motion";
import "./introduction.scss";
import SvgAnimation from "./SvgAnimation.js";

export default function Introduction() {
  const colorHover = (color, colorHover, text, fontSize) => {
    return (
      <motion.strong
        whileHover={{
          textShadow: `0 0 10px ${colorHover}`,
          transition: { duration: 0.2 },
        }}
        style={{
          textShadow: `0 0 30px ${colorHover}`,
          transition: "color 0.5s", // Transition for color change
          color,
          fontSize: fontSize || "inherit",
        }}
        transition={{ duration: 0.2 }}
      >
        {text}
      </motion.strong>
    );
  };
  return (
    <section className={"introduction--outer-container"}>
      <div className={"introduction"}>
        <div className="text-container">
          <h1>Hi, i'm</h1>
          <div className="introduction--animation-container">
            <SvgAnimation />
          </div>
          <p>
            I'm a software engineer and web developer <br /> with a passion for
            creating <br />
            {colorHover("#ca8f06", "#ca8f06", "beautiful")} {",  "}
            {colorHover("#1168bf", "#1168bf", "inovative")} {",  "}
            {colorHover("#5dd1ac", "#5dd1ac", "user-friendly")}
            <br />
            websites and applications.
          </p>
        </div>
      </div>
    </section>
  );
}
