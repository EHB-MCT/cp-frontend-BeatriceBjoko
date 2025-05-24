import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { withBase } from "../../utils/helpers";
import "../../Sprookje.css";

import ScrollRevealText from "./ScrollRevealText";

const MAX_DRAG = 250; // hoeveel px paddestoelen mogen bewegen

const FirebirdReveal = ({ onRevealComplete }) => {
	const leftRef = useRef(null);
	const rightRef = useRef(null);
	const birdRef = useRef(null);

	const featherRef = useRef(null);
	const triggerTextRef = useRef(null);

	const [leftDragged, setLeftDragged] = useState(0);
	const [rightDragged, setRightDragged] = useState(0);
	const [birdVisible, setBirdVisible] = useState(false);

	// DRAG FUNCTION
	const handleMouseDrag = (ref, side) => {
		let startX = 0;

		const onMouseMove = (e) => {
			let deltaX = e.clientX - startX;

			if (side === "left") {
				// Alleen naar links (dus negatief)
				const clampedX = Math.max(-MAX_DRAG, Math.min(0, deltaX));
				ref.current.style.transform = `translateX(${clampedX}px)`;
				setLeftDragged(Math.abs(clampedX));
			}
			if (side === "right") {
				// Alleen naar rechts (dus positief)
				const clampedX = Math.min(MAX_DRAG, Math.max(0, deltaX));
				ref.current.style.transform = `translateX(${clampedX}px)`;
				setRightDragged(Math.abs(clampedX));
			}
		};

		const onMouseUp = () => {
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("mouseup", onMouseUp);
		};

		return (e) => {
			startX = e.clientX;
			window.addEventListener("mousemove", onMouseMove);
			window.addEventListener("mouseup", onMouseUp);
		};
	};

	// vuurvogel tonen
	useEffect(() => {
		if (leftDragged >= MAX_DRAG && rightDragged >= MAX_DRAG && !birdVisible) {
			setBirdVisible(true);

			const glowTimeline = gsap.timeline();
			glowTimeline.fromTo(birdRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" });
			gsap.to(birdRef.current, {
				keyframes: [
					{ filter: "drop-shadow(0 0 5px orange)", duration: 0.6 },
					{ filter: "drop-shadow(0 0 10px yellow)", duration: 0.6 },
					{ filter: "drop-shadow(0 0 15px red)", duration: 0.6 },
					{ filter: "drop-shadow(0 0 10px orange)", duration: 0.6 },
				],
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
			});

			// Vuurvogel vliegt weg
			gsap.to(birdRef.current, {
				y: "-40vh",
				opacity: 0,
				duration: 2,
				delay: 2,
				ease: "power2.inOut",
				onStart: () => glowTimeline.kill(),
			});

			// Veertje valt
			gsap.fromTo(
				featherRef.current,
				{ y: "-20vh", opacity: 0 },
				{
					y: "40vh",
					opacity: 1,
					duration: 3,
					delay: 4,
					ease: "power2.out",
				}
			);

			// Scroll pas tonen NA veer gevallen is
			setTimeout(() => {
				if (onRevealComplete) onRevealComplete();
			}, 7000);
		}
	}, [leftDragged, rightDragged, birdVisible]);

	return (
		<div className="firebird-reveal-scene">
			<div role="button" onMouseDown={handleMouseDrag(leftRef, "left")} className="mushroom-wrapper">
				<img ref={leftRef} src={withBase("assets/paddenstoel-links.png")} alt="Paddestoel links" className="mushroom mushroom-left" draggable="false" />
			</div>
			<div role="button" onMouseDown={handleMouseDrag(rightRef, "right")} className="mushroom-wrapper">
				<img ref={rightRef} src={withBase("assets/paddenstoel-rechts.png")} alt="Paddestoel rechts" className="mushroom mushroom-right" draggable="false" />
			</div>
			<img ref={birdRef} src={withBase("assets/vuurvogel.png")} alt="Vuurvogel" className="firebird" style={{ opacity: 0 }} />

			<img ref={featherRef} src={withBase("assets/veer.png")} alt="Magische veer" className="falling-feather" style={{ opacity: 0 }} />
		</div>
	);
};

export default FirebirdReveal;
