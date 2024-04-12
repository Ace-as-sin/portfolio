import React from "react";
import "./projectCard.scss";
import { motion } from "framer-motion";

const ProjectCard = ({
  image,
  skills,
  link,
  reverse = false,
  clipPath,
  glowColor,
}) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <motion.div
      className="project-card"
      onClick={handleClick}
      whileHover={{
        boxShadow: `0 0 28px ${glowColor}`,
        transition: { duration: 0.2 }, // Duration for hover animation
      }}
      style={{
        flexDirection: !reverse ? "row" : "row-reverse",
        boxShadow: `0 0 10px rgba(0, 0, 0, 0)`, // Initial box shadow
        transition: "box-shadow 0.3s", // Transition for box shadow change
        boxShadow: `0 0 12px ${glowColor}`,
      }}
    >
      <img src={image} alt="Project Image" style={{ clipPath }} />
      <div className="skills">{skills}</div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Visit Website
      </a>
    </motion.div>
  );
};

export default ProjectCard;
