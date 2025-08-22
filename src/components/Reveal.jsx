import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Reveal({ children, delay = 0, y = 24, duration = 0.6, className = "", bidirectional = false }) {
	const ref = useRef(null);

	if (bidirectional) {
		// Scroll-synced reversible animation
		const { scrollYProgress } = useScroll({ target: ref, offset: ["start 95%", "end 15%"] });
		const opacityRaw = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
		const yRaw = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [y, 0, 0, -y]);
		const opacity = useSpring(opacityRaw, { stiffness: 120, damping: 24, mass: 0.8 });
		const yVal = useSpring(yRaw, { stiffness: 120, damping: 24, mass: 0.8 });

		return (
			<motion.div ref={ref} className={className} style={{ opacity, y: yVal }}>
				{children}
			</motion.div>
		);
	}

	// Default: once-only reveal
	const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
	return (
		<motion.div
			ref={ref}
			className={className}
			initial={{ opacity: 0, y }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
		>
			{children}
		</motion.div>
	);
}
