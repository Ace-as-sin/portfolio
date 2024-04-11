import Nav from "./components/nav/nav.js";
import { motion } from "framer-motion";
import Introduction from "./components/home/Introduction.js";
import "./App.scss";

export default function App() {
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
    <div className="home--wrapper">
      <Nav />
      <Introduction />
    </div>
  );
}
