import { motion } from "framer-motion";

// Shared Container component
export function Container({ children, className = "" }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>;
}

// Shared fade animation variants
export const fade = {
  hidden: { opacity: 0, y: 12 },
  show: (i = 0) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { 
      delay: 0.06 * i, 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  })
};

// Shared motion.div with fade variants
export function FadeIn({ children, delay = 0, className = "", ...props }) {
  return (
    <motion.div 
      variants={fade} 
      custom={delay} 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Shared motion.div with fade variants for initial animations
export function FadeInInitial({ children, delay = 0, className = "", ...props }) {
  return (
    <motion.div 
      variants={fade} 
      custom={delay} 
      initial="hidden" 
      animate="show"
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
