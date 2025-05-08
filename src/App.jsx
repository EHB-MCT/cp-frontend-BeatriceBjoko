import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import MakingOf from "./pages/MakingOf";
import "./App.css";

function App() {
	return (
		<div className="wrapper">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/making-of/:projectId" element={<MakingOf />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
