import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Beaker } from 'lucide-react';

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
      rotate: -180,
    },
    pop: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.8
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
        duration: 2,
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
        duration: 0.3,
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
      <div className="relative mx-auto w-32 h-32 mb-6">
        {/* Beaker container with gradient background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[var(--cyan)] to-[var(--cyan-20)] rounded-2xl"
          variants={beakerVariants}
          animate={animationPhase}
        >
          {/* Beaker icon */}
          <div className="absolute inset-2 bg-[var(--ink)] rounded-xl flex items-center justify-center">
            <Beaker className="w-8 h-8 text-white" />
          </div>
          
          {/* Liquid filling animation */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-white/90 rounded-b-xl overflow-hidden"
            variants={liquidVariants}
            animate={animationPhase}
            style={{ originY: 1 }}
          >
            {/* Bubbling effect */}
            {animationPhase === 'filling' || animationPhase === 'filled' ? (
              <div className="absolute inset-0">
                {/* Multiple bubbles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-white/60 rounded-full"
                    style={{
                      width: Math.random() * 8 + 4,
                      height: Math.random() * 8 + 4,
                      left: `${Math.random() * 80 + 10}%`,
                      bottom: `${Math.random() * 20 + 10}%`,
                    }}
                    variants={bubbleVariants}
                    animate={animationPhase}
                    transition={{
                      delay: Math.random() * 0.5,
                      repeat: animationPhase === 'filling' ? Infinity : 0,
                      repeatDelay: Math.random() * 0.8 + 0.2,
                      duration: 0.6
                    }}
                  />
                ))}
              </div>
            ) : null}
          </motion.div>
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
