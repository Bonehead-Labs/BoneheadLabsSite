import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

export default function DynamicImageReveal({ 
  src, 
  alt, 
  className = "",
  direction = "left", // "left" or "right" for fly-in direction
  panStrength = 20, // How much the image pans within its container
  borderRadius = "2rem",
  framed = true // When false, removes border/shadow/radius for full-bleed use
}) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-20% 0px -20% 0px" });
  
  // Scroll-based panning effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Transform for image panning within the container
  const panX = useTransform(scrollYProgress, [0, 1], [
    direction === "left" ? -panStrength : panStrength,
    direction === "left" ? panStrength : -panStrength
  ]);
  const panY = useTransform(scrollYProgress, [0, 1], [-panStrength/2, panStrength/2]);
  
  // Scale effect for subtle zoom
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.05, 1.1]);
  
  // Fly-in animation variants
  const tilt = framed ? 15 : 0;
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -200 : 200,
      scale: 0.8,
      rotateY: direction === "left" ? -tilt : tilt,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        opacity: { duration: 0.8 },
        x: { duration: 1.2 },
        scale: { duration: 1.2 },
        rotateY: { duration: 1.2 }
      }
    },
    exit: {
      opacity: 0.7,
      x: direction === "left" ? -100 : 100,
      scale: 0.95,
      rotateY: direction === "left" ? -(tilt/2) : (tilt/2),
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "exit"}
      style={{
        borderRadius: framed ? borderRadius : 0,
        boxShadow: framed ? "0 20px 40px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.05)" : "none",
        border: framed ? "3px solid var(--ink)" : "none",
      }}
    >
      {/* Image with panning effect */}
      <motion.div
        ref={imageRef}
        className="relative overflow-hidden"
        style={{
          borderRadius: framed ? `calc(${borderRadius} - 3px)` : 0,
        }}
      >
        <motion.img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          style={{
            x: panX,
            y: panY,
            scale: scale,
          }}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        {/* Subtle overlay for better text readability */}
        {framed && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        )}
      </motion.div>
      
      {/* Animated border highlight */}
      {framed && (
        <motion.div
          className="absolute inset-0 rounded-[calc(2rem-1px)] border-2 border-[var(--cyan)] opacity-0"
          animate={isInView ? {
            opacity: [0, 0.6, 0],
            scale: [0.98, 1.02, 1],
          } : {}}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: "easeInOut"
          }}
        />
      )}
    </motion.div>
  );
}
