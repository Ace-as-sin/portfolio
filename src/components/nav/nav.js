import "./navigation.scss";
import { motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";

const Navigation = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useLayoutEffect(() => {
    function updateSize() {
      setIsSmallScreen(window.innerWidth < 768);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const scrollToNav = (nav) => {
    const element = document.getElementById(nav);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const NavigationLink = ({ text, color, nav }) => {
    const initialAnimation = {
      opacity: 0,
      textShadow: `0 0 0px ${color}`,
    };

    const commonAnimation = {
      color: "white",
      opacity: 1,
    };

    return (
      <motion.a
        className="navigation--nav-link"
        style={{
          color: "white",
          transition: "color 0.3s",
          textShadow: `0 0 10px ${color}`,
        }}
        initial={initialAnimation}
        animate={commonAnimation}
        transition={{ duration: 0.2 }}
        whileHover={{ textShadow: `0 0 24px ${color}` }} // Increase glow on hover
        onClick={() => scrollToNav(nav)} // Pass scrollToNav as a callback
      >
        {text}
      </motion.a>
    );
  };

  return (
    <nav className={"navigation--outer-container"}>
      <div>
        <NavigationLink
          text={isSmallScreen ? "BT" : "Blake Trapnell"}
          delay={0}
          color={"red"}
          nav={"introduction"}
        />
      </div>
      <ul className="navigation--nav-container">
        <li>
          <NavigationLink
            text="Projects"
            delay={0.8}
            color={"blue"}
            nav={"projects"}
          />
        </li>
        <li>
          <NavigationLink text="About" delay={1} color={"blue"} nav="about" />
        </li>
        <li>
          <NavigationLink
            text="Contact"
            delay={1.2}
            color={"blue"}
            nav="contact"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
