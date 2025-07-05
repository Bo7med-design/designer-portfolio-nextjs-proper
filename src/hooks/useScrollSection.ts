import { useState, useEffect } from 'react';
import { throttle } from '@/utils/throttle';

export const useScrollSection = (sectionIds: string[]) => {
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setCurrentSection(sectionIds[i]);
          break;
        }
      }
    }, 100); // Throttle to 100ms for better performance

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, [sectionIds]);

  return currentSection;
};