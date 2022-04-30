import Nav from "./components/nav/nav.js";
import "./App.scss";

import PortfolioPhoto from "./images/portfolioPhoto.png";
import TitleSection from "./components/TitleSection.js";
import Skills from "./components/Skills.js";

export default function App() {
	return (
		<div className="home--wrapper">
			<Nav />
			<section className={"home--outer-container"}>
				<div className="home--profile-photo-container">
					<img  className="home--profile-photo" src={PortfolioPhoto} alt={"Blake Trapnell"}/>
				</div>
				<TitleSection/>
				<Skills/>
			</section>
		</div>
	);
}
