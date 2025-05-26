import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../Sprookje.css";
import { withBase } from "../utils/helpers";
import FeatherFloat from "../components/sprookje/FeatherFloat";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChapterTitle from "../components/sprookje/ChapterTitle";
import FirebirdReveal from "../components/sprookje/FirebirdReveal";
import ScrollRevealText from "../components/sprookje/ScrollRevealText";
import ScenePrincesses from "../components/sprookje/ScenePrincesses";
import SceneKashei from "../components/sprookje/SceneKashei";
import SceneFirebirdDance from "../components/sprookje/SceneFirebirdDance";

gsap.registerPlugin(ScrollTrigger);

const Sprookje = () => {
	const titleFirstPart = "de";
	const titleSecondPart = "vuurvogel";

	const letterRefs = useRef([]);
	const secondLetterRefs = useRef([]);
	const authorRef = useRef(null);
	const buttonRef = useRef(null);

	const chapterTitleRef = useRef(null);
	const ivanRef = useRef(null);
	const kaderRef = useRef(null);
	const ivanTextRef = useRef(null);

	const scene3Ref = useRef(null);

	const chapter2Ref = useRef(null);
	const scene4Ref = useRef(null);

	const [storyStarted, setStoryStarted] = useState(false);
	const [showScene5, setShowScene5] = useState(false);
	const [showScene6, setShowScene6] = useState(false);
	const [showScene7, setShowScene7] = useState(false);

	// Intro animatie

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

	// Animatie & scroll uitvoeren NA storyStarted true is

	useEffect(() => {
		if (storyStarted) {
			const verhaalElement = document.getElementById("verhaal");
			if (verhaalElement) {
				setTimeout(() => {
					verhaalElement.scrollIntoView({ behavior: "smooth" });
				}, 300);
			}

			// start animatie na scroll
			const tl = gsap.timeline({ delay: 1 });

			tl.fromTo(chapterTitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" })
				.to(chapterTitleRef.current, { opacity: 1, duration: 0.5 }) // blijft even staan
				.to(chapterTitleRef.current, { opacity: 0, y: -30, duration: 1, ease: "power2.inOut" })
				.fromTo(kaderRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "<+0.2")
				.fromTo(ivanRef.current, { x: "-100%", opacity: 0, y: 0 }, { x: "0%", opacity: 1, y: 0, duration: 2, ease: "power3.out" }, "-=0.2")
				.to(
					ivanRef.current,
					{
						y: -30,
						duration: 1.5,
						repeat: -1,
						yoyo: true,
						ease: "sine.inOut",
					},
					">"
				)
				.fromTo(ivanTextRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: -80, duration: 1.5, ease: "power2.out" }, "-=1");

			// ScrollTrigger voor parallax scene
			ScrollTrigger.create({
				trigger: scene3Ref.current,
				start: "top center",
				end: "bottom top",
				scrub: true,
				onUpdate: (self) => {
					const scroll = self.progress;
					const gate = document.querySelector(".gate-layer");
					const text = document.querySelector(".orchard-text");

					if (gate && text) {
						gsap.to(gate, { y: scroll * 150, ease: "none", overwrite: true });
						gsap.to(text, { y: -scroll * 50, ease: "none", overwrite: true });
					}
				},
			});
		}
	}, [storyStarted]);

	const startStory = () => {
		setStoryStarted(true);
	};

	return (
		<div className="sprookje-container">
			<div
				className="first-page"
				style={{
					backgroundImage: `url(${withBase("assets/background-landing.jpg")})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
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

					<button ref={buttonRef} onClick={startStory}>
						Start het verhaal
					</button>
				</section>
			</div>
			{storyStarted && (
				<>
					<section className="scene">
						<h2 ref={chapterTitleRef} className="scene-title">
							CHAPTER 1: THE DARK ORCHARD
						</h2>
						<div className="scene-content" id="verhaal">
							<p ref={ivanTextRef} className="ivan-text">
								Discover the story of Prince Ivan!
							</p>
							<img ref={kaderRef} src={withBase("assets/kader.png")} alt="Kader" className="kader" />
							<img ref={ivanRef} src={withBase("assets/prinsivan.png")} alt="Prins Ivan" className="ivan" />
						</div>
					</section>

					<section className="scene scene-3" ref={scene3Ref}>
						<div className="parallax-scene-wrapper">
							<img src={withBase("assets/green-background.png")} alt="achtergrond" className="orchard-layer background-layer" />
							<img src={withBase("assets/appletree.png")} alt="tree with apples" className="tree-left" />
							<img src={withBase("assets/appletree.png")} alt="tree with apples" className="tree-right" />
							<img src={withBase("assets/gate.png")} alt="gate" className="orchard-layer gate-layer" />

							<div className="orchard-text">
								<p>
									<span className="orchard-highlight">P</span>rins Ivan stond voor een hoge poort.
									<br />
									Achter het hek: een donkere boomgaard, stil en betoverd.
								</p>
							</div>
						</div>
					</section>

					<section className="scene scene-4" ref={scene4Ref}>
						<ChapterTitle ref={chapter2Ref} text="CHAPTER 2: The Firebird Appears" />
						<ScrollRevealText text="Can you drag the mushrooms? Something magical might appear!" triggerRef={chapter2Ref} />
						<FeatherFloat />
						<FirebirdReveal onRevealComplete={() => setShowScene5(true)} />
					</section>

					{showScene5 && (
						<section className="scene scene-5">
							<div className="firebird-texts">
								<ScrollRevealText text="The Firebird escapes from Prince Ivan." />
								<ScrollRevealText text="The Firebird has dropped a feather." />
								<ScrollRevealText
									text="Perhaps this will be useful later?"
									onComplete={() => {
										setShowScene6(true);
										setTimeout(() => {
											const princessScene = document.querySelector(".scene-6");
											if (princessScene) {
												princessScene.scrollIntoView({ behavior: "smooth" });
											}
										}, 300);
									}}
								/>
							</div>
						</section>
					)}

					{showScene6 && (
						<ScenePrincesses
							onSceneEnd={() => {
								setShowScene7(true);
								setTimeout(() => {
									const kasheiScene = document.querySelector(".scene-7");
									if (kasheiScene) {
										kasheiScene.scrollIntoView({ behavior: "smooth" });
									}
								}, 300);
							}}
						/>
					)}

					{showScene7 && (
						<>
							<SceneKashei />
							<SceneFirebirdDance />
						</>
					)}
				</>
			)}
		</div>
	);
};

export default Sprookje;
