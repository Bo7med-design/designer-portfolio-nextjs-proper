'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';
import { ReactNode } from 'react';

interface LazyMotionWrapperProps {
  children: ReactNode;
}

/**
 * Lazy-loaded motion wrapper that only loads necessary features
 * Reduces initial bundle size significantly
 */
export function LazyMotionWrapper({ children }: LazyMotionWrapperProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}

// Optimized motion components with minimal features
export const MotionDiv = m.div;
export const MotionSection = m.section;
export const MotionImg = m.img;
export const MotionSpan = m.span;
export const MotionButton = m.button;

// Simplified animation variants with proper easing
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};

export const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
};

export const slideLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
};

export const slideRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
};

export const scale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
};