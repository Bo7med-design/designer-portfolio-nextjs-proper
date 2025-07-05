/**
 * Simple throttle function to replace lodash dependency
 * Limits function execution to once per specified delay
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): T & { cancel: () => void } {
  let timeoutId: number | null = null;
  let lastExecTime = 0;

  const throttledFunction = ((...args: Parameters<T>) => {
    const currentTime = Date.now();

    if (currentTime - lastExecTime > delay) {
      lastExecTime = currentTime;
      return func(...args);
    }

    if (timeoutId === null) {
      timeoutId = window.setTimeout(() => {
        lastExecTime = Date.now();
        timeoutId = null;
        func(...args);
      }, delay - (currentTime - lastExecTime));
    }
  }) as T & { cancel: () => void };

  throttledFunction.cancel = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  return throttledFunction;
}