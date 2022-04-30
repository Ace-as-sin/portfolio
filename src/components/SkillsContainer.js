import "./SkillsContainer.scss"
import Carousel from "../components/Carousel.js";


const SkillsContainer = (props) => {
    const {backgroundColor, text, carouselArray} = props

    return (
        <section className="skills-container--outer-container" style={{backgroundColor}}>
            <div>{text}:</div>
            <div>
                <Carousel carouselArray={carouselArray} position={40}/> 
            </div>
        </section>
    )
}

export default SkillsContainer