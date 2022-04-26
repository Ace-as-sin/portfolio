import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Projects from "./pages/projects.jsx";
import Skills from "./pages/skills.jsx";
import Socials from "./pages/socials.jsx";

import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/social" element={<Socials />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
reportWebVitals();
