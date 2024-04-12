import React from "react";
import ProjectText from "./ProjectText";
import "./projects.scss";
import ProjectCard from "./ProjectCard";
import Smarty from "../../../images/Smarty.png";
import SmartRent from "../../../images/SmartRent.png";
import Blabu from "../../../images/Blabu.png";
import { SmartRentSkills, SmartySkills, BlabuSkills } from "../../../data/data";

function Projects() {
  return (
    <div id="projects" className="projects--outer-container">
      <ProjectText />
      <h2>Smarty</h2>
      <ProjectCard image={Smarty} skills={SmartySkills} link={"https://www.smarty.com"}/>
      <h2>SmartRent</h2>
      <ProjectCard
        image={SmartRent}
        reverse={true}
        clipPath={"polygon(17% 0, 100% 0, 100% 100%, 0% 100%)"}
        skills={SmartRentSkills}
        link={"https://www.smartrent.com"}
      />
      <h2>Blabu</h2>
      <ProjectCard image={Blabu} skills={BlabuSkills} link={"https://Blabugames.com"} />
    </div>
  );
}

export default Projects;
