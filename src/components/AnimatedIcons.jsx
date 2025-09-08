import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, Gamepad2 } from 'lucide-react';

export const AnimatedBeakerIcon = ({ className = "w-48 h-48 text-white" }) => {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, duration: 0.6 }}
        className="relative"
      >
        <Beaker className="w-full h-full" />

        {/* Liquid fill */}
        <motion.div
          initial={{ height: '0%' }}
          animate={{ height: '55%' }}
          transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.1 }}
          className="absolute bottom-2 left-2 right-2 overflow-hidden rounded-b-[8px]"
          style={{ maskImage: 'radial-gradient(circle at 50% -20%, black 52%, transparent 53%)' }}
        >
          <motion.div
            className="absolute inset-x-0 bottom-0 bg-white/80"
            style={{ height: '100%' }}
          />
          {/* Gentle wave */}
          <motion.div
            className="absolute -top-2 left-0 right-0 h-4 bg-white/80 opacity-90"
            animate={{ x: [0, 8, 0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ borderRadius: '50% 50% 0 0' }}
          />
        </motion.div>

        {/* Steam */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute bottom-[45%] left-1/2 w-1 h-1 rounded-full bg-white/80"
            style={{ marginLeft: i * 8 - 8 }}
            initial={{ opacity: 0, y: 0, scale: 0.6 }}
            animate={{ opacity: [0, 1, 0], y: -24 - i * 8, scale: [0.6, 1, 0.6] }}
            transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: 'easeOut', delay: i * 0.3 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export const AnimatedGamepadIcon = ({ className = "w-48 h-48 text-white" }) => {
  return (
    <motion.div
      className={className}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18, duration: 0.5 }}
    >
      <div className="relative w-full h-full">
        <Gamepad2 className="w-full h-full" />
        {/* Button pulses */}
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/70"
            style={{ width: 8, height: 8, top: '42%', left: `${60 + i * 6}%` }}
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 1.6 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
          />
        ))}
        {/* Subtle tilt */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: [0, -2.5, 0, 2.5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
};

export default { AnimatedBeakerIcon, AnimatedGamepadIcon };


