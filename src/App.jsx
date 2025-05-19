import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import MakingOf from "./pages/MakingOf";
import Sprookje from "./pages/Sprookje";
import LayoutPortaal from "./pages/LayoutPortaal";
import LayoutSprookje from "./pages/LayoutSprookje";

import "./App.css";

function App() {
	return (
		<Routes>
			<Route element={<LayoutPortaal />}>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/making-of/:projectId" element={<MakingOf />} />
			</Route>

			<Route element={<LayoutSprookje />}>
				<Route path="/sprookje" element={<Sprookje />} />
			</Route>
		</Routes>
	);
}

export default App;
