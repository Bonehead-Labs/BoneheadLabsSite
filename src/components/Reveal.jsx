import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Reveal({ children, delay = 0, y = 24, duration = 0.6, className = "" }) {
	const ref = useRef(null);
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
