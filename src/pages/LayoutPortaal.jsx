import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function LayoutPortaal() {
	return (
		<div className="portal-background">
			<Navbar className="navbar-default" />
			<div className="wrapper">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}

export default LayoutPortaal;
