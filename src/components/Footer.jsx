import "../App.css";
import { withBase } from "../utils/helpers";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer-logo">
				<img src={withBase("/assets/logosprookje.svg")} alt="Er Was Eens logo" />
			</div>

			<div className="footer-about">
				<h3>ABOUT US</h3>
				<p>Welcome to a world where fairy tales scroll with depth. Through parallax magic, we bring front-end stories to life — one layer at a time. ✨</p>
			</div>

			<div className="footer-links">
				<h3>LINKS</h3>
				<ul>
					<li>
						<a href="/">HOME</a>
					</li>
					<li>
						<a href="/projects">PROJECTS</a>
					</li>
					<li>
						<a href="/making-of/example-id">MAKING-OF</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
