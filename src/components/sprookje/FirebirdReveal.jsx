import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { withBase } from "../../utils/helpers";
import "../../Sprookje.css";

const MAX_DRAG = 250; // hoeveel px paddestoelen mogen bewegen

const FirebirdReveal = () => {
	const leftRef = useRef(null);
	const rightRef = useRef(null);
	const birdRef = useRef(null);

	const [leftDragged, setLeftDragged] = useState(0);
	const [rightDragged, setRightDragged] = useState(0);
	const [birdVisible, setBirdVisible] = useState(false);

	// DRAG FUNCTION
	const handleMouseDrag = (ref, side) => {
		let startX = 0;

		const onMouseMove = (e) => {
			let deltaX = e.clientX - startX;

			// Corrigeer richting
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

	// SHOW FIREBIRD
	useEffect(() => {
		if (leftDragged >= MAX_DRAG && rightDragged >= MAX_DRAG && !birdVisible) {
			setBirdVisible(true);
			gsap.fromTo(birdRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" });
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
		</div>
	);
};

export default FirebirdReveal;
