import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ScrollBackground({
  src,
  alt,
  direction = "left", // "left" | "right"
  sizePercent = 75, // reduces overall size; 75 = 25% smaller
  borderWidthPx = 3,
  borderRadius = "1.5rem",
  shadow = true,
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  // Fly-in from edge -> hold -> fly-out with cross-fade
  const startX = direction === "left" ? -600 : 600;
  const endX = direction === "left" ? 600 : -600;
  const xRaw = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [startX, 0, 0, endX]);
  const yRaw = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [30, 0, 0, -30]);
  const scaleRaw = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.98, 1, 1, 0.98]);
  const opacityRaw = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Spring smoothing so it feels fluid, not jittery
  const springOpts = { stiffness: 120, damping: 26, mass: 0.8 };
  const x = useSpring(xRaw, springOpts);
  const y = useSpring(yRaw, springOpts);
  const scale = useSpring(scaleRaw, springOpts);
  const opacity = useSpring(opacityRaw, { stiffness: 120, damping: 24, mass: 0.8 });

  const innerStyle = {
    width: `${sizePercent}%`,
    height: "80%",
    borderRadius,
    border: `${borderWidthPx}px solid var(--ink)`,
    boxShadow: shadow ? "0 25px 60px rgba(0,0,0,0.15), 0 10px 25px rgba(0,0,0,0.08)" : "none",
  };

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <motion.div style={{ x, y, opacity, scale, ...innerStyle }} className="overflow-hidden">
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </motion.div>
    </div>
  );
}


