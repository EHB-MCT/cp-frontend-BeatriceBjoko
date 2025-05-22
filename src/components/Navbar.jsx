import { NavLink } from "react-router-dom";
import "../App.css";
import { withBase } from "../utils/helpers";

function Navbar({ className }) {
	return (
		<nav className={`navbar ${className}`}>
			<div className="wrapper">
				<img src={withBase("/assets/logosprookje.svg")} alt="Er Was Eens" className="logo" />
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
