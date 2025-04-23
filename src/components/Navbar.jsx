import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assets/logosprookje.svg";

function Navbar() {
	return (
		<nav className="navbar">
			<img src={logo} alt="Er Was Eens" className="logo" />
			<ul className="nav-links">
				<li>
					<Link to="/">HOME</Link>
				</li>
				<li>
					<Link to="/projects">PROJECTS</Link>
				</li>
				<li>
					<Link to="/making-of/example-id">MAKING-OF</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
