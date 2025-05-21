import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "../Sprookje.css";

const ParallaxScene = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]); // stilstaand
	const treesY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
	const gateY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]); // tekst scrolt naar onder

	return (
		<section className="parallax-scene-wrapper" ref={ref}>
			<motion.div className="orchard-layer background-layer" style={{ y: backgroundY }} />
			<motion.img src="/appeltree.png" alt="Appelbomen" className="orchard-layer tree-layer" style={{ y: treesY }} />
			<motion.img src="/gate.png" alt="Hek" className="orchard-layer gate-layer" style={{ y: gateY }} />
			<motion.h2 className="orchard-text" style={{ y: textY }}>
				<span>Prince Ivan stood before a tall gate.</span>
				<br />
				<span>Behind the fence: a dark orchard, silent and enchanted.</span>
			</motion.h2>
		</section>
	);
};

export default ParallaxScene;
