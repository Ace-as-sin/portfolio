
import "./navigation.scss";
import { motion } from "framer-motion";

const NavigationLink = ({ text, color, nav }) => {
  const scrollToNav = () => {
    const element = document.getElementById(nav);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
      style={{
        color: "white",
        transition: "color 0.3s",
        textShadow: `0 0 10px ${color}`,
      }}
      initial={initialAnimation}
      animate={commonAnimation}
      transition={{ duration: 0.2 }}
      whileHover={{ textShadow: `0 0 24px ${color}` }} // Increase glow on hover
      onClick={scrollToNav()}
    >
      {text}
    </motion.a>
  );
};

const Navigation = () => {
  return (
    <nav className={"navigation--outer-container"}>
      <div>
        <NavigationLink text="Blake Trapnell" delay={0} color={"red"} />
      </div>
      <ul className="navigation--nav-container">
        <li>
          <NavigationLink
            text="Projects"
            delay={0.8}
            color={"blue"}
            nav={"#projects"}
          />
        </li>
        <li>
          <NavigationLink text="About" delay={1} color={"blue"} />
        </li>
        <li>
          <NavigationLink text="Contact" delay={1.2} color={"blue"} />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
