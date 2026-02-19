import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

// High-precision Joby glide curve
export const GLIDE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Magnetic Wrapper for UI elements
 */
export const MagneticWrapper: React.FC<{ children: React.ReactNode; strength?: number }> = ({ children, strength = 0.35 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * strength);
    y.set((clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block hw-accel"
    >
      {children}
    </motion.div>
  );
};

/**
 * Snappy 0.5s Reveal on Scroll
 */
export const RevealOnScroll: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      className={`hw-accel ${className}`}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: GLIDE_EASE, delay }}
      viewport={{ once: true, margin: "-10%" }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Snappy Stagger Container (0.05s increments)
 */
export const StaggerContainer: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.05,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`hw-accel ${className}`}
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: GLIDE_EASE } },
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Animated Line Reveal
 */
// Added className support to allow custom spacing and positioning as used in Home.tsx
export const LineReveal: React.FC<{ vertical?: boolean; delay?: number; className?: string }> = ({ vertical, delay = 0, className = '' }) => {
  return (
    <motion.div
      className={`bg-black/10 hw-accel ${vertical ? 'w-[1px] h-full' : 'h-[1px] w-full'} ${className}`}
      initial={vertical ? { scaleY: 0 } : { scaleX: 0 }}
      whileInView={vertical ? { scaleY: 1 } : { scaleX: 1 }}
      style={{ originX: 0, originY: 0 }}
      transition={{ duration: 0.8, ease: GLIDE_EASE, delay }}
      viewport={{ once: true }}
    />
  );
};
