import "./SkillsContainer.scss"
import Carousel from "../components/Carousel.js";
import { frameworks } from "../data/data";

const SkillsContainer = (props) => {
    const {backgroundColor, text} = props

    return (
        <section className="skills-container--outer-container" style={{backgroundColor}}>
            <div>{text}</div>
            <div>
                <Carousel carouselArray={frameworks} position={200}/> 
            </div>
        </section>
    )
}

export default SkillsContainer