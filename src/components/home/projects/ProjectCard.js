import React from "react";
import "./projectCard.scss";
import { motion } from "framer-motion";
import { useState, useLayoutEffect } from "react";

const ProjectCard = ({ image, skills, link, reverse = false, clipPath }) => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useLayoutEffect(() => {
    function updateSize() {
      setIsSmallScreen(window.innerWidth < 768);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleSkillsClick = (e, link) => {
    e.stopPropagation(); // Prevent the click event from bubbling up to the parent link
    // Navigate to the skills page
    window.open(link, "_blank", "noreferrer noopener");
  };

  return (
    <motion.a
      className="project-card"
      whileHover={{
        boxShadow: `0 0 36px ${skills[0].color}`,
        transition: { duration: 0.2 }, // Duration for hover animation
      }}
      href={link}
      target="_blank no-referrer no-opener"
      style={{
        flexDirection: isSmallScreen
          ? "column"
          : reverse
          ? "row-reverse"
          : "row",
        transition: "box-shadow 0.3s", // Transition for box shadow change
        boxShadow: `0 0 24px ${skills[0].color}`,
      }}
    >
      <img
        className="project--website-photo"
        src={image}
        alt="Project website example"
        style={{ clipPath }}
      />

      <div className="skills">
        {skills.map((skill, index) => {
          const { img, title, color, alt, link } = skill;
          return (
            <div key={index} className="skill" onClick={(e)=>{handleSkillsClick(e, link)}}>
              <p>{title}</p>
              <motion.img
                src={img}
                alt={alt}
                whileHover={{
                  filter: `drop-shadow(0 0 22px ${color})`, // Apply filter on hover
                  transition: { duration: 0.1 }, // Duration for hover animation
                }}
                style={{ filter: `drop-shadow(0 0 10px ${color})` }} // Initial filter
              />
            </div>
          );
        })}
      </div>
    </motion.a>
  );
};

export default ProjectCard;
