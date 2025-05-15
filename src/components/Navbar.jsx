import { NavLink } from "react-router-dom";
import "../App.css";
import logo from "../assets/logosprookje.svg";

function Navbar() {
	return (
		<nav className="navbar">
			<div className="wrapper">
				<img src={logo} alt="Er Was Eens" className="logo" />
				<ul className="nav-links">
					<li>
						<NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
							HOME
						</NavLink>
					</li>
					<li>
						<NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
							PROJECTS
						</NavLink>
					</li>
					<li>
						<NavLink to="/making-of/beatrice-bjoko-devuurvogel" className={({ isActive }) => (window.location.pathname.startsWith("/making-of") ? "active" : "")}>
							MAKING-OF
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
