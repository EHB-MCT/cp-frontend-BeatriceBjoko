import { useEffect, useRef, forwardRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ChapterTitle = forwardRef(({ text, className = "" }, ref) => {
	const titleRef = useRef(null);

	useEffect(() => {
		if (ref?.current) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ref.current,
					start: "top center",
					end: "bottom center",
					toggleActions: "play none none reverse",
				},
			});

			tl.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }).to(titleRef.current, { opacity: 1, duration: 0.5 }).to(titleRef.current, { opacity: 0, y: -30, duration: 1, ease: "power2.inOut" });
		}
	}, [ref]);

	return (
		<div ref={ref}>
			<h2 ref={titleRef} className={`scene-title ${className}`}>
				{text}
			</h2>
		</div>
	);
});

export default ChapterTitle;
