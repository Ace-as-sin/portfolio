import React from "react";
import ProjectText from "./ProjectText";
import "./projects.scss";
import ProjectCard from "./ProjectCard";
import Smarty from "../../../images/Smarty.png";
import SmartRent from "../../../images/SmartRent.png";
import Blabu from "../../../images/Blabu.png";

function Projects() {
  return (
    <div id="projects" className="projects--outer-container">
      <ProjectText />
      <ProjectCard image={Smarty} glowColor={"#fdd83c"} />
      <ProjectCard
        image={SmartRent}
        reverse={true}
        clipPath={"polygon(17% 0, 100% 0, 100% 100%, 0% 100%)"}
        glowColor={"#663399"}
      />
      <ProjectCard image={Blabu} glowColor={"#31afd4"} />
    </div>
  );
}

export default Projects;
