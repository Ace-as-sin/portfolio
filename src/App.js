import Nav from "./components/nav/nav.js";
import Introduction from "./components/home/introduction/Introduction.js";
import "./App.scss";
import Projects from "./components/home/projects/Projects.js";

export default function App() {
  return (
    <div className="home--wrapper">
      <Nav />
      <Introduction />
      <Projects/>
    </div>
  );
}
