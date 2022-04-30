import SkillsContainer from "./SkillsContainer";
import { frameworks, programs, languages } from "../data/data";
import "./skills.scss"

export const Skills = () => {
	return (
		<div className="skills--section">
			<SkillsContainer backgroundColor={"#C4C4C480"} carouselArray={frameworks} text={"Frameworks"} />
			<SkillsContainer backgroundColor={"#7B3E1980"} carouselArray={languages} text={"Languages"} />
			<SkillsContainer backgroundColor={"#FFFCFF80"} carouselArray={programs} text={"Programs"} />
		</div>
	);
};

export default Skills;
