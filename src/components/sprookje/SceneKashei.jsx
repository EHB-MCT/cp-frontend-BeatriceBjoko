import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChapterTitle from "./ChapterTitle";
import ScrollRevealText from "./ScrollRevealText";
import { withBase } from "../../utils/helpers";

gsap.registerPlugin(ScrollTrigger);

const SceneKashei = () => {
	const chapterRef = useRef(null);
	const kasheiRef = useRef(null);
	const sceneRef = useRef(null);
	const textsRef = useRef(null);

	useEffect(() => {
		//  Kashei groeit bij scroll
		gsap.to(kasheiRef.current, {
			scale: 1.8,
			scrollTrigger: {
				trigger: kasheiRef.current,
				start: "top center",
				end: "bottom top",
				scrub: true,
			},
			ease: "power2.inOut",
		});

		// Shake effect bij het bereiken van midden
		gsap.to(sceneRef.current, {
			x: "-2%",
			duration: 0.05,
			repeat: 5,
			yoyo: true,
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: kasheiRef.current,
				start: "center center",
				toggleActions: "play none none none",
			},
		});

		gsap.to(textsRef.current, {
			opacity: 1,
			duration: 1,
			scrollTrigger: {
				trigger: textsRef.current,
				start: "top 80%",
			},
		});
	}, []);

	return (
		<section
			className="scene scene-7 kashei-scene"
			ref={sceneRef}
			style={{
				backgroundImage: `url(${withBase("assets/kashei-background.png")})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<ChapterTitle ref={chapterRef} text="CHAPTER 4: The Immortal Giant" className="light-title" />

			<div className="kashei-wrapper">
				<img ref={kasheiRef} src={withBase("assets/kashei.png")} alt="Kashei" className="kashei-img" />
			</div>

			<div className="firebird-texts" ref={textsRef} style={{ opacity: 0 }}>
				<ScrollRevealText text="YOU DARE STEP INTO MY REALM?!" triggerRef={textsRef} className="kashei-text" />
				<ScrollRevealText text="Your invincibility is a lie — and so is your immortality! -Ivan" triggerRef={textsRef} className="kashei-text" />
				<ScrollRevealText text="And I’ve come to free the princesses." triggerRef={textsRef} className="kashei-text" />
			</div>
		</section>
	);
};

export default SceneKashei;
