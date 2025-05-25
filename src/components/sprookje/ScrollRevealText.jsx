import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../Sprookje.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollRevealText = ({ text, triggerRef, onComplete, className = "" }) => {
	const containerRef = useRef(null);

	const splitText = useMemo(() => {
		return text.split(/(\s+)/).map((word, index) => {
			if (word.match(/^\s+$/)) return word;
			return (
				<span className="word" key={index}>
					{word}
				</span>
			);
		});
	}, [text]);

	useEffect(() => {
		const el = containerRef.current;
		const trigger = triggerRef?.current || el;

		ScrollTrigger.refresh();

		gsap.fromTo(
			el,
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 0.8,
				ease: "power2.out",
				scrollTrigger: {
					trigger,
					start: "top 90%",
					toggleActions: "play none none none",
				},
			}
		);

		// Scrub voor woord-per-woord effect
		const wordEls = el.querySelectorAll(".word");

		// Timeline met callback wanneer klaar
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger,
				start: "top bottom",
				end: "bottom center",
				scrub: 0.4,
			},
			onComplete: () => {
				if (typeof onComplete === "function") {
					onComplete();
				}
			},
		});

		tl.fromTo(wordEls, { opacity: 0.1, y: 20, filter: "blur(10px)" }, { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.05, ease: "none" });
	}, [triggerRef, onComplete]);

	return (
		<p ref={containerRef} className={`scroll-reveal-text drag-hint-text ${className}`}>
			{splitText}
		</p>
	);
};

export default ScrollRevealText;
