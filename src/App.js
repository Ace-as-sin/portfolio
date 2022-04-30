import Nav from "./components/nav/nav.js";
import "./App.scss";

import PortfolioPhoto from "./images/portfolioPhoto.png";
import TitleSection from "./components/TitleSection.js";
import SkillsContainer from "./components/SkillsContainer.js";

export default function App() {
	return (
		<div>
			<Nav />
			<section className={"home--outer-container"}>
				<div className="home--profile-photo-container">
					<img  className="home--profile-photo" src={PortfolioPhoto} alt={"Blake Trapnell"}/>
				</div>
				<TitleSection/>
				<SkillsContainer backgroundColor={"#C4C4C4CC"} text={"Frameworks:"}/>
			</section>
		</div>
	);
}
