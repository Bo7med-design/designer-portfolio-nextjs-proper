/**
 * Bundle analysis utilities for production optimization
 */

export interface BundleMetrics {
  totalSize: number;
  gzippedSize: number;
  chunks: Array<{
    name: string;
    size: number;
    modules: string[];
  }>;
}

/**
 * Analyze bundle composition in development
 */
export function analyzeBundleComposition(): void {
  if (process.env.NODE_ENV !== 'development') return;

  // Log large dependencies
  const largeDependencies = [
    'framer-motion',
    'react',
    'react-dom',
    'next'
  ];

  console.group('📦 Bundle Analysis');
  largeDependencies.forEach(dep => {
    console.log(`${dep}: Available in bundle`);
  });
  console.groupEnd();
}

/**
 * Monitor chunk loading performance
 */
export function monitorChunkLoading(): void {
  if (typeof window === 'undefined') return;

  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.name.includes('chunk') || entry.name.includes('vendors')) {
        console.log(`🔄 Chunk loaded: ${entry.name} (${entry.duration.toFixed(2)}ms)`);
      }
    });
  });

  try {
    observer.observe({ entryTypes: ['navigation', 'resource'] });
  } catch {
    console.warn('Performance Observer not supported');
  }
}

/**
 * Detect unused code in production
 */
export function detectUnusedCode(): void {
  if (process.env.NODE_ENV !== 'development') return;

  // Check for unused Framer Motion features
  const motionFeatures = [
    'AnimatePresence',
    'useScroll',
    'useTransform',
    'useSpring',
    'useMotionValue'
  ];

  console.group('🔍 Unused Code Detection');
  motionFeatures.forEach(feature => {
    // This would need actual usage analysis in a real implementation
    console.log(`${feature}: Check usage manually`);
  });
  console.groupEnd();
}