import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ChapterScrollTitle = ({ text }) => {
	const titleRef = useRef(null);
	const containerRef = useRef(null);

	useEffect(() => {
		if (containerRef.current) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top center",
					end: "bottom center",
					toggleActions: "play none none reverse",
				},
			});

			tl.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }).to(titleRef.current, { opacity: 1, duration: 0.5 }).to(titleRef.current, { opacity: 0, y: -30, duration: 1, ease: "power2.inOut" });
		}
	}, []);

	return (
		<div ref={containerRef}>
			<h2 ref={titleRef} className="scene-title">
				{text}
			</h2>
		</div>
	);
};

export default ChapterScrollTitle;
