import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ControllerAnimation = ({ className = "", children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.3 });
  const [phase, setPhase] = useState('hidden'); // hidden -> pop -> idle

  useEffect(() => {
    if (inView && phase === 'hidden') {
      setPhase('pop');
      const t = setTimeout(() => setPhase('idle'), 900);
      return () => clearTimeout(t);
    }
  }, [inView, phase]);

  const frameVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -8 },
    pop: { scale: 1, opacity: 1, rotate: 0, transition: { type: 'spring', stiffness: 260, damping: 18 } },
    idle: { scale: 1, opacity: 1 }
  };

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className="relative mx-auto w-36 h-36 mb-6">
        {/* Glow */}
        <motion.div className="absolute -inset-2 rounded-3xl bg-[var(--cyan)]/20 blur-xl" animate={{ opacity: phase === 'hidden' ? 0 : 1 }} />
        <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--cyan)]/30 to-[var(--cyan-20)]/20 border border-[var(--ink)]/10" variants={frameVariants} animate={phase} />
        <div className="absolute inset-2 rounded-xl bg-[var(--paper)] border border-[var(--ink)]/10" />

        {/* Controller SVG */}
        <svg className="absolute inset-0 m-auto" width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Body */}
          <motion.path
            d="M24 64 C24 48 40 38 56 38 C72 38 88 48 88 64 C88 76 80 86 68 86 H44 C32 86 24 76 24 64 Z"
            fill="white"
            stroke="currentColor"
            className="text-[var(--ink)]"
            initial={{ y: 8, opacity: 0 }}
            animate={phase !== 'hidden' ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          />

          {/* D-Pad */}
          <motion.g initial={{ opacity: 0 }} animate={phase !== 'hidden' ? { opacity: 1 } : {}} transition={{ delay: 0.25 }}>
            <rect x="40" y="58" width="14" height="6" rx="2" fill="#0a0a0a" opacity="0.9" />
            <rect x="44" y="54" width="6" height="14" rx="2" fill="#0a0a0a" opacity="0.9" />
          </motion.g>

          {/* ABXY Buttons */}
          <motion.g initial={{ scale: 0.8, opacity: 0 }} animate={phase !== 'hidden' ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 0.3, type: 'spring', stiffness: 220, damping: 14 }}>
            <motion.circle cx="72" cy="60" r="4" fill="#ff6b6b" animate={phase === 'idle' ? { scale: [1, 1.1, 1] } : {}} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }} />
            <motion.circle cx="78" cy="66" r="4" fill="#51cf66" animate={phase === 'idle' ? { scale: [1, 1.08, 1] } : {}} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} />
            <motion.circle cx="66" cy="66" r="4" fill="#339af0" animate={phase === 'idle' ? { scale: [1, 1.06, 1] } : {}} transition={{ duration: 2.0, repeat: Infinity, ease: 'easeInOut' }} />
            <motion.circle cx="72" cy="72" r="4" fill="#ffd43b" animate={phase === 'idle' ? { scale: [1, 1.1, 1] } : {}} transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }} />
          </motion.g>

          {/* Thumbstick hint / tilt */}
          <motion.circle cx="48" cy="72" r="6" fill="#0a0a0a" opacity="0.9" animate={phase === 'idle' ? { cx: [47, 49, 47] } : {}} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} />

          {/* Cable */}
          <motion.path d="M56 38 C 58 30, 70 26, 78 20" stroke="currentColor" className="text-[var(--ink-70)]" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={phase !== 'hidden' ? { pathLength: 1 } : {}} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }} />
        </svg>
      </div>

      {children}
    </div>
  );
};

export default ControllerAnimation;


