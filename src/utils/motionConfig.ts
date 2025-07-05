/**
 * Optimized Framer Motion configuration
 * Reduces bundle size and improves performance
 */

// Reduced motion variants for better performance
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: 'easeOut' }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};

export const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 30 },
  transition: { duration: 0.4, ease: 'easeOut' }
};

export const slideInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
  transition: { duration: 0.4, ease: 'easeOut' }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.3, ease: 'easeOut' }
};

// Stagger animations
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 }
};

// Performance-optimized spring configs
export const springConfig = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
  mass: 1
};

export const smoothSpring = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
  mass: 1
};

// Reduced motion preferences
export const getReducedMotionConfig = () => {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return {
      transition: { duration: 0.01 },
      initial: false,
      animate: false,
      exit: false
    };
  }
  return {};
};

// Global motion config for performance
export const globalMotionConfig = {
  reducedMotion: 'user', // Respect user preferences
  transition: { duration: 0.3, ease: 'easeOut' },
  features: {
    // Only load features we actually use
    animations: true,
    gestures: false, // Disable if not using gestures
    layout: false,   // Disable if not using layout animations
    drag: false      // Disable if not using drag
  }
};

// Optimized AnimatePresence config
export const animatePresenceConfig = {
  mode: 'wait' as const,
  initial: false, // Disable initial animations for better performance
};

// Viewport-based animation config
export const viewportConfig = {
  once: true, // Only animate once when entering viewport
  margin: '0px 0px -100px 0px', // Start animation before element is fully visible
  amount: 0.3 // Trigger when 30% of element is visible
};

/**
 * Create optimized motion component props
 */
export function createMotionProps(variant: keyof typeof variants, options?: {
  delay?: number;
  duration?: number;
  viewport?: boolean;
}) {
  const baseProps = variants[variant];
  const reducedMotion = getReducedMotionConfig();
  
  return {
    ...baseProps,
    ...reducedMotion,
    ...(options?.viewport && { viewport: viewportConfig }),
    transition: {
      ...baseProps.transition,
      delay: options?.delay || 0,
      duration: options?.duration || baseProps.transition?.duration || 0.3
    }
  };
}

const variants = {
  fadeInUp,
  fadeIn,
  slideInLeft,
  slideInRight,
  scaleIn
};

/**
 * Lazy load motion components to reduce initial bundle
 */
export const LazyMotionFeatures = () => import('framer-motion').then(mod => mod.domAnimation);

/**
 * Check if device supports smooth animations
 */
export function supportsAdvancedAnimations(): boolean {
  if (typeof window === 'undefined') return false;
  
  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return false;
  }
  
  // Check device performance indicators
  const connection = (navigator as Navigator & { connection?: { effectiveType?: string } }).connection;
  if (connection && connection.effectiveType && connection.effectiveType.includes('2g')) {
    return false;
  }
  
  // Check hardware concurrency (CPU cores)
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
    return false;
  }
  
  return true;
}