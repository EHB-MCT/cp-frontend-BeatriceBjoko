import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { withBase } from "../../utils/helpers";
import "../../Sprookje.css";

gsap.registerPlugin(ScrollTrigger);

const NUM_FEATHERS = 18;

const FeatherFloat = () => {
	const containerRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		const feathers = container.querySelectorAll(".feather");

		feathers.forEach((feather) => {
			const startX = Math.random() * window.innerWidth;
			const amplitudeX = 100 + Math.random() * 100; // hoe ver links/rechts
			const startY = 300 + Math.random() * 300;
			const endY = startY - 400 - Math.random() * 200;
			const size = 50 + Math.random() * 60;
			const rotationStart = Math.random() * 360;
			const rotationEnd = rotationStart + (Math.random() * 90 - 45);

			gsap.set(feather, {
				x: startX,
				y: startY,
				width: size,
				rotate: rotationStart,
				opacity: 1,
			});

			// Scroll-triggered animatie met zijwaarts zweven
			gsap.to(feather, {
				y: endY,
				x: startX + (Math.random() > 0.5 ? amplitudeX : -amplitudeX),
				rotate: rotationEnd,
				ease: "sine.inOut",
				scrollTrigger: {
					trigger: container,
					start: "top bottom",
					end: "bottom top",
					scrub: true,
				},
			});
		});
	}, []);

	return (
		<div className="feather-container" ref={containerRef}>
			{Array.from({ length: NUM_FEATHERS }).map((_, i) => (
				<img key={i} src={withBase("assets/veer.png")} alt="veer" className="feather" />
			))}
		</div>
	);
};

export default FeatherFloat;
