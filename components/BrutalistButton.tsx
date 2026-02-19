import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { GLIDE_EASE, MagneticWrapper } from './MotionComponents';

interface Props extends Omit<HTMLMotionProps<"button">, 'ref'> {
  variant?: 'primary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  magnetic?: boolean;
}

const BrutalistButton: React.FC<Props> = ({ 
  children, 
  variant = 'outline', 
  size = 'md', 
  fullWidth, 
  className = '',
  magnetic = false,
  ...props 
}) => {
  // Variant Definitions
  const variants = {
    primary: {
      base: "bg-white text-black",
      hover: { backgroundColor: "#0338bb", color: "#FFFFFF", borderColor: "#0338bb" }
    },
    accent: {
      base: "bg-[#FF6600] text-black",
      hover: { backgroundColor: "#0338bb", color: "#FFFFFF", borderColor: "#0338bb" }
    },
    outline: {
      base: "bg-white text-black",
      hover: { backgroundColor: "#0338bb", color: "#FFFFFF", borderColor: "#0338bb" }
    }
  };

  const sizes = {
    sm: "px-6 py-2 text-[10px]",
    md: "px-8 py-3 text-[11px]",
    lg: "px-12 py-5 text-base"
  };

  const currentVariant = variants[variant];

  const buttonContent = (
    <motion.button
      className={`hw-accel inline-flex items-center justify-center font-bold border-[3px] border-black outline-none uppercase tracking-[0.2em] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${currentVariant.base} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      whileHover={{ 
        x: -4, 
        y: -4, 
        boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
        ...currentVariant.hover
      }}
      whileTap={{ 
        x: 0, 
        y: 0, 
        boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)",
        transition: { duration: 0.1 }
      }}
      transition={{ 
        duration: 0.25, 
        ease: GLIDE_EASE 
      }}
      {...props}
    >
      {children}
    </motion.button>
  );

  return magnetic ? (
    <MagneticWrapper strength={0.4}>
      {buttonContent}
    </MagneticWrapper>
  ) : buttonContent;
};

export default BrutalistButton;