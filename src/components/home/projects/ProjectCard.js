import React from "react";
import "./projectCard.scss";
import { motion } from "framer-motion";

const ProjectCard = ({ image, skills, link, reverse = false, clipPath }) => {
  console.log(skills);

  return (
    <motion.a
      className="project-card"
      whileHover={{
        boxShadow: `0 0 28px ${skills[0].color}`,
        transition: { duration: 0.2 }, // Duration for hover animation
      }}
      href={link}
      target="_blank norel nonoppener"
      style={{
        flexDirection: !reverse ? "row" : "row-reverse",
        transition: "box-shadow 0.3s", // Transition for box shadow change
        boxShadow: `0 0 12px ${skills[0].color}`,
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
            <a
              href={link}
              target="_blank norel nonreferrer"
              key={index}
              className="skill"
            >
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
            </a>
          );
        })}
      </div>
    </motion.a>
  );
};

export default ProjectCard;
