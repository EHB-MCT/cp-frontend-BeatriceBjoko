import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { withBase } from "../../utils/helpers";
import ChapterTitle from "./ChapterTitle";
import FeatherFloat from "./FeatherFloat";
import ScrollRevealText from "./ScrollRevealText";

gsap.registerPlugin(ScrollTrigger);

const SceneFirebirdDance = () => {
	const sceneRef = useRef(null);
	const firebirdRef = useRef(null);
	const chapterRef = useRef(null);
	const legsRef = useRef(null);
	const eggRef = useRef(null);
	const flitsRef = useRef(null);

	const [showFinalText, setShowFinalText] = useState(false);

	useEffect(() => {
		gsap.set(firebirdRef.current, {
			opacity: 0,
			x: -400,
			y: 0,
		});
		gsap.set(eggRef.current, { opacity: 0, scale: 0 });
		gsap.set(flitsRef.current, { opacity: 0 });

		ScrollTrigger.create({
			trigger: legsRef.current,
			start: "bottom bottom",
			onEnter: () => {
				gsap.to(firebirdRef.current, {
					opacity: 1,
					x: 0,
					duration: 1.5,
					ease: "power3.out",
					onComplete: () => {
						const dance = gsap.timeline({
							repeat: -1,
							ease: "sine.inOut",
						});

						dance
							.to(firebirdRef.current, {
								x: 200,
								y: -150,
								rotation: 15,
								duration: 1.5,
							})
							.to(firebirdRef.current, {
								x: -150,
								y: 100,
								rotation: -10,
								duration: 1.8,
							})
							.to(firebirdRef.current, {
								x: 100,
								y: -50,
								rotation: 8,
								duration: 1.4,
							})
							.to(firebirdRef.current, {
								x: 0,
								y: 0,
								rotation: 0,
								duration: 1.2,
							});
					},
				});

				// Ei verschijnt na 4 seconden
				setTimeout(() => {
					gsap.to(eggRef.current, {
						opacity: 1,
						scale: 1,
						duration: 1.2,
						ease: "power2.out",
						onComplete: () => {
							gsap.to(eggRef.current, {
								scale: 1.1,
								repeat: -1,
								yoyo: true,
								duration: 0.8,
								ease: "sine.inOut",
							});
						},
					});
				}, 4000);

				// Ei explodeert na 8 seconden
				setTimeout(() => {
					gsap.killTweensOf(eggRef.current);
					gsap.to(eggRef.current, {
						rotation: 720,
						scale: 2,
						opacity: 0,
						duration: 1.2,
						ease: "power4.in",
					});

					// Flits
					gsap.to(flitsRef.current, {
						opacity: 1,
						duration: 0.2,
						onComplete: () => {
							gsap.to(flitsRef.current, {
								opacity: 0,
								delay: 0.5,
								duration: 0.8,
								onComplete: () => {
									setShowFinalText(true);
								},
							});
						},
					});
				}, 8000);
			},
		});
	}, []);

	if (showFinalText) {
		return (
			<section className="scene scene-8 firebird-dance-scene" style={{ backgroundColor: "#fff5f0" }}>
				<div className="firebird-texts">
					<ScrollRevealText text="The firebird dances everyone into a trance" />
					<ScrollRevealText text="Which leads Ivan to find the egg containing Kashei’s soul" />
					<ScrollRevealText text="Ivan finds the egg and smashes it" />
					<ScrollRevealText text="Ivan has defeated the giant!" />
				</div>
			</section>
		);
	}

	return (
		<section
			className="scene scene-8 firebird-dance-scene"
			ref={sceneRef}
			style={{
				backgroundImage: `url(${withBase("assets/kashei-background.png")})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<FeatherFloat />
			<ChapterTitle ref={chapterRef} text="CHAPTER 5: Dance of the Firebird" className="light-title" />
			<div className="kashei-legs-wrapper">
				<img ref={legsRef} src={withBase("assets/kashei-legs.png")} alt="Kashei's Legs" className="kashei-legs-img" />
			</div>

			<img src={withBase("assets/vuurvogel.png")} alt="Dancing Firebird" className="firebird-dance-img" ref={firebirdRef} />
			<img src={withBase("assets/egg.png")} alt="Magic Egg" className="magic-egg" ref={eggRef} />
			<div className="flits-screen" ref={flitsRef}></div>
		</section>
	);
};

export default SceneFirebirdDance;
