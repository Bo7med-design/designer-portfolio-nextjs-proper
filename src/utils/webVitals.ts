/**
 * Simplified Web Vitals monitoring for portfolio
 */

interface WebVitalsMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

/**
 * Report metric to console in development
 */
function reportMetric(metric: WebVitalsMetric) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`📊 ${metric.name}: ${metric.value.toFixed(2)} (${metric.rating})`);
  }
}

/**
 * Initialize basic performance monitoring
 */
export function initWebVitals() {
  if (typeof window === 'undefined') return;

  // Basic performance monitoring without external dependencies
  if ('PerformanceObserver' in window) {
    try {
      // Monitor paint timing
      const paintObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            reportMetric({
              name: 'FCP',
              value: entry.startTime,
              rating: entry.startTime < 1800 ? 'good' : entry.startTime < 3000 ? 'needs-improvement' : 'poor',
              delta: entry.startTime,
              id: 'fcp'
            });
          }
        });
      });
      paintObserver.observe({ entryTypes: ['paint'] });
    } catch {
      // Silently fail
    }
  }
}

/**
 * Monitor custom performance metrics
 */
export function monitorCustomMetrics() {
  if (typeof window === 'undefined' || !window.PerformanceObserver) return;

  try {
    const longTaskObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 50) {
          reportMetric({
            name: 'Long Task',
            value: entry.duration,
            rating: entry.duration > 100 ? 'poor' : 'needs-improvement',
            delta: entry.duration,
            id: `long-task-${Date.now()}`
          });
        }
      });
    });
    longTaskObserver.observe({ entryTypes: ['longtask'] });
  } catch {
    // Silently fail
  }
}

/**
 * Monitor JavaScript errors
 */
export function monitorErrors() {
  if (typeof window === 'undefined') return;

  window.addEventListener('error', () => {
    reportMetric({
      name: 'JavaScript Error',
      value: 1,
      rating: 'poor',
      delta: 1,
      id: `js-error-${Date.now()}`
    });
  });

  window.addEventListener('unhandledrejection', () => {
    reportMetric({
      name: 'Promise Rejection',
      value: 1,
      rating: 'poor',
      delta: 1,
      id: `promise-rejection-${Date.now()}`
    });
  });
}

/**
 * Get basic performance summary
 */
export function getPerformanceSummary(): Record<string, number> {
  if (typeof window === 'undefined' || !window.performance) return {};

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paint = performance.getEntriesByType('paint');
  const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;

  return {
    ttfb: navigation?.responseStart - navigation?.requestStart || 0,
    domContentLoaded: navigation?.domContentLoadedEventEnd || 0,
    loadComplete: navigation?.loadEventEnd || 0,
    fcp,
    totalResources: performance.getEntriesByType('resource').length,
  };
}