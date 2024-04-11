import Nav from "./components/nav/nav.js";
import Introduction from "./components/home/Introduction.js";
import "./App.scss";

export default function App() {
  return (
    <div className="home--wrapper">
      <Nav />
      <Introduction />
    </div>
  );
}
