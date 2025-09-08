import React, { useState, useEffect, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';

const LabAnimation = ({ children, className = "" }) => {
  const [animationPhase, setAnimationPhase] = useState('hidden'); // hidden, pop, filling, filled
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.3 });

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);
      // Start the animation sequence
      setAnimationPhase('pop');
      
      // After beaker pops in, start filling
      setTimeout(() => {
        setAnimationPhase('filling');
      }, 800);
      
      // After filling completes, show text
      setTimeout(() => {
        setAnimationPhase('filled');
      }, 2800);
    }
  }, [inView, isVisible]);

  const beakerVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: -12,
    },
    pop: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 18,
        mass: 0.7
      }
    },
    filling: {
      scale: 1,
      opacity: 1,
      rotate: 0,
    },
    filled: {
      scale: 1,
      opacity: 1,
      rotate: 0,
    }
  };

  const liquidVariants = {
    hidden: {
      height: "0%",
      opacity: 0,
    },
    filling: {
      height: "100%",
      opacity: 1,
      transition: {
        duration: 1.8,
        ease: "easeInOut"
      }
    },
    filled: {
      height: "100%",
      opacity: 1,
    }
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    filled: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const bubbleVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    filling: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut"
      }
    },
    filled: {
      opacity: 1,
      scale: 1,
    }
  };

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className="relative mx-auto w-36 h-36 mb-6">
        <motion.div
          className="absolute inset-0 rounded-2xl"
          variants={beakerVariants}
          animate={animationPhase}
        >
          {/* Glow */}
          <div className="absolute -inset-2 rounded-3xl bg-[var(--cyan)]/20 blur-xl" />
          {/* Frame */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--cyan)]/30 to-[var(--cyan-20)]/20 border border-white/10" />
          {/* Inner */}
          <div className="absolute inset-2 rounded-xl bg-[var(--ink)] border border-white/10" />

          {/* SVG: Magnetic stirrer + Erlenmeyer flask setup */}
          <svg className="absolute inset-0 m-auto" width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="flask-clip">
                <path d="M42 18 H70 L74 30 L78 40 L76 84 C75 92 66 98 56 98 C46 98 37 92 36 84 L34 40 L38 30 Z" />
              </clipPath>
              <linearGradient id="liquid-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#e9faff" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* Hotplate base */}
            <rect x="32" y="82" width="48" height="12" rx="3" fill="#0f1418" opacity="0.9" />
            <motion.circle cx="72" cy="88" r="4" fill="#1b2730" stroke="#7ddcff" strokeOpacity="0.6" animate={animationPhase !== 'hidden' ? { rotate: [0, 20, 0] } : {}} style={{ transformOrigin: '72px 88px' }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }} />

            {/* Flask outline */}
            <path d="M42 18 H70" stroke="#bff7ff" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" />
            <path d="M42 18 H70 L74 30 L78 40 L76 84 C75 92 66 98 56 98 C46 98 37 92 36 84 L34 40 L38 30 Z" stroke="white" strokeOpacity="0.9" strokeWidth="2.5" />

            {/* Liquid inside flask */}
            <g clipPath="url(#flask-clip)">
              <motion.rect x="34" y="98" width="44" height="46" rx="8" fill="url(#liquid-grad)" variants={liquidVariants} animate={animationPhase} style={{ originY: 1 }} />
              {/* Gentle wave on top */}
              <motion.path d="M34 72 C 42 68, 50 76, 58 72 C 66 68, 74 76, 82 72 L 82 112 L 34 112 Z" fill="#ffffff" fillOpacity="0.95" animate={animationPhase !== 'hidden' ? { y: [6, 2, 6] } : {}} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }} />
              {/* Stir bar */}
              <motion.rect x="50" y="86" width="12" height="3" rx="1.5" fill="#e6faff" animate={animationPhase !== 'hidden' ? { rotate: 360 } : {}} transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '56px 87.5px' }} />
            </g>

            {/* Graduations on flask */}
            <g stroke="#bff7ff" strokeOpacity="0.35">
              <line x1="40" y1="60" x2="46" y2="60" />
              <line x1="40" y1="68" x2="46" y2="68" />
              <line x1="40" y1="76" x2="46" y2="76" />
            </g>
          </svg>
        </motion.div>
      </div>
      
      {/* Text that fades in after beaker is filled */}
      <motion.div
        variants={textVariants}
        animate={animationPhase}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default LabAnimation;
