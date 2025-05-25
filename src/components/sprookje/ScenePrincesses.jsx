import { useEffect, useRef } from "react";
import gsap from "gsap";
import ChapterTitle from "./ChapterTitle";
import { withBase } from "../../utils/helpers";
import ScrollRevealText from "./ScrollRevealText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ScenePrincesses = ({ onSceneEnd }) => {
	const chapterRef = useRef(null);
	const leftGateRef = useRef(null);
	const rightGateRef = useRef(null);
	const princessesRef = useRef([]);
	const textsRef = useRef(null);

	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: chapterRef.current,
				start: "top center",
				end: "bottom center",
				toggleActions: "play none none none",
			},
		});

		// Eerst: poorten openen
		tl.to(leftGateRef.current, { x: "-100%", duration: 2, ease: "power2.inOut" }, 0);
		tl.to(rightGateRef.current, { x: "100%", duration: 2, ease: "power2.inOut" }, "<");

		// Dan: prinsessen 1 per 1 tonen, na poort open
		princessesRef.current.forEach((ref, i) => {
			const yOffset = i % 2 === 0 ? -20 : 20;
			const startTime = 2.2 + i * 0.1;

			tl.fromTo(ref, { x: -150, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: "power2.out" }, startTime);

			tl.to(
				ref,
				{
					y: yOffset,
					duration: 1.5,
					repeat: -1,
					yoyo: true,
					ease: "sine.inOut",
				},
				startTime + 1
			);
		});
		tl.to(
			textsRef.current,
			{
				opacity: 1,
				duration: 0.8,
				onComplete: () => {
					ScrollTrigger.refresh();
					// scene klaar → volgende tonen
					if (onSceneEnd) onSceneEnd();
				},
			},
			">"
		);
	}, []);

	return (
		<section
			className="scene scene-6 princesses-scene"
			style={{
				backgroundImage: `url(${withBase("assets/background-princes.png")})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<ChapterTitle ref={chapterRef} text="CHAPTER 3: The 12 Princesses" />

			<div className="gate-container">
				<img ref={leftGateRef} src={withBase("assets/gate-left.png")} alt="Left Gate" className="castle-gate left" />
				<img ref={rightGateRef} src={withBase("assets/gate-right.png")} alt="Right Gate" className="castle-gate right" />
			</div>

			<div className="princesses-wrapper">
				{Array.from({ length: 12 }).map((_, i) => (
					<img key={i} ref={(el) => (princessesRef.current[i] = el)} src={withBase("assets/prinses-silhouet.png")} alt="Prinses" className="princess-silhouette" style={{ opacity: 0 }} />
				))}
			</div>

			<div className="firebird-texts" ref={textsRef} style={{ opacity: 0 }}>
				<ScrollRevealText text="In the orchard, he sees 12 princesses." triggerRef={textsRef} className="princesses-text" />
				<ScrollRevealText text="A princess warns him about the immortal giant Kashei." triggerRef={textsRef} className="princesses-text" />
				<ScrollRevealText text="He turns everyone who enters to stone." triggerRef={textsRef} className="princesses-text" />
				<ScrollRevealText text="Unafraid, Prince Ivan feels the Firebird’s feather glow in his pocket." triggerRef={textsRef} className="princesses-text" />
			</div>
		</section>
	);
};

export default ScenePrincesses;
