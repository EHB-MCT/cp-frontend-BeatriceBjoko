import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function LayoutSprookje() {
	return (
		<>
			<Navbar className="navbar-overlay" />
			<Outlet />
		</>
	);
}

export default LayoutSprookje;
