import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../Sprookje.css";

const Sprookje = () => {
	const titleFirstPart = "de";
	const titleSecondPart = "vuurvogel";
	const letterRefs = useRef([]);
	const secondLetterRefs = useRef([]);
	const authorRef = useRef(null);
	const buttonRef = useRef(null);

	useEffect(() => {
		// Animate title letters één voor één
		letterRefs.current.forEach((ref, i) => {
			gsap.fromTo(
				ref,
				{ opacity: 0, y: 30, filter: "blur(4px)" },
				{
					opacity: 1,
					y: 0,
					filter: "blur(0px)",
					delay: i * 0.1,
					duration: 0.8,
					ease: "power3.out",
				}
			);
		});

		// Animate title letters één voor één (vuurvogel)
		secondLetterRefs.current.forEach((ref, i) => {
			gsap.fromTo(
				ref,
				{ opacity: 0, y: 30, filter: "blur(4px)" },
				{
					opacity: 1,
					y: 0,
					filter: "blur(0px)",
					delay: i * 0.1,
					duration: 0.8,
					ease: "power3.out",
				}
			);
		});

		const totalTitleLength = titleFirstPart.length + titleSecondPart.length;

		// Auteur fade-in NA titel
		gsap.fromTo(authorRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: totalTitleLength * 0.1 + 0.5, duration: 1, ease: "power2.out" });

		// Button pulse
		gsap.to(buttonRef.current, {
			scale: 1.05,
			repeat: -1,
			yoyo: true,
			duration: 1.2,
			ease: "sine.inOut",
		});
	}, []);

	return (
		<div className="sprookje-container">
			<div className="first-page">
				<section className="intro">
					<div className="title-spacing">
						<h1 className="vuurvogel-title">
							{titleFirstPart.split("").map((character, i) => (
								<span key={i} ref={(element) => (letterRefs.current[i] = element)} style={{ display: "inline-block" }}>
									{character}
								</span>
							))}
						</h1>
						<h1 className="vuurvogel-title">
							{titleSecondPart.split("").map((character, i) => (
								<span key={i} ref={(element) => (secondLetterRefs.current[i] = element)} style={{ display: "inline-block" }}>
									{character}
								</span>
							))}
						</h1>
					</div>

					<p ref={authorRef} className="auteur">
						Bette Westera
					</p>

					<button ref={buttonRef} onClick={() => document.getElementById("verhaal").scrollIntoView({ behavior: "smooth" })}>
						Start het verhaal
					</button>
				</section>
			</div>
		</div>
	);
};

export default Sprookje;
