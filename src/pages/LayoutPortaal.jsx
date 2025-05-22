import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { withBase } from "../utils/helpers";

function LayoutPortaal() {
	return (
		<div
			className="portal-background"
			style={{
				backgroundImage: `url(${withBase("assets/background_image.png")})`,
			}}
		>
			<Navbar className="navbar-default" />
			<div className="wrapper">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}

export default LayoutPortaal;
