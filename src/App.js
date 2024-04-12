import Nav from "./components/nav/nav.js";
import Introduction from "./components/home/introduction/Introduction.js";
import "./App.scss";
import Projects from "./components/home/projects/Projects.js";
import About from "./components/about/about.js";
import Contact from "./components/home/contact/Contact.js";

export default function App() {
  return (
    <div className="home--wrapper">
      <Nav />
      <Introduction />
      <Projects/>
      <About/>
      <Contact/>
    </div>
  );
}
