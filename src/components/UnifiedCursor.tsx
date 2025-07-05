'use client';

import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface UnifiedCursorProps {
  defaultColor?: string;
  hoverScale?: number;
  clickScale?: number;
}

const UnifiedCursor: React.FC<UnifiedCursorProps> = ({
  defaultColor = '#ffffff',
  hoverScale = 1.4,
  clickScale = 0.8,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [currentColor, setCurrentColor] = useState(defaultColor);
  const [isClient, setIsClient] = useState(false);
  const rafRef = useRef<number | null>(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });

  // Client-side only initialization
  useEffect(() => {
    setIsClient(true);
    
    // Initialize cursor position to center of screen
    if (typeof window !== 'undefined') {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setPosition({ x: centerX, y: centerY });
      targetPosition.current = { x: centerX, y: centerY };
      currentPosition.current = { x: centerX, y: centerY };
    }
  }, []);

  const updateCursorPosition = useCallback(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    currentPosition.current.x = lerp(currentPosition.current.x, targetPosition.current.x, 0.15);
    currentPosition.current.y = lerp(currentPosition.current.y, targetPosition.current.y, 0.15);

    setPosition({
      x: currentPosition.current.x,
      y: currentPosition.current.y
    });

    rafRef.current = requestAnimationFrame(updateCursorPosition);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    // Only show cursor on desktop
    if (window.innerWidth < 768) {
      return;
    }

    const updatePosition = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      setIsHovering(
        target.matches('a, button, [role="button"], input, select, textarea') ||
        target.closest('a, button, [role="button"], input, select, textarea') !== null
      );

      // Simple color change for project sections
      const projectSection = target.closest('[data-project]');
      if (projectSection) {
        const projectId = projectSection.getAttribute('data-project');
        switch (projectId) {
          case 'zakuza':
            setCurrentColor('#4A7C59');
            break;
          case 'zambo':
          case 'skyforce':
            setCurrentColor('#DC2626');
            break;
          case 'mondy':
          case 'alpha':
            setCurrentColor('#FACC15');
            break;
          case 'brezel':
            setCurrentColor('#FF6B35');
            break;
          case 'palm':
            setCurrentColor('#3B82F6');
            break;
          default:
            setCurrentColor(defaultColor);
        }
      } else {
        setCurrentColor(defaultColor);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    rafRef.current = requestAnimationFrame(updateCursorPosition);

    window.addEventListener('mousemove', updatePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isClient, defaultColor, updateCursorPosition]);

  // Don't render until client-side
  if (!isClient) {
    return null;
  }

  // Don't render on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  const scale = isClicking ? clickScale : isHovering ? hoverScale : 1;

  return (
    <motion.div
      className="fixed pointer-events-none block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 999999, // Much higher than intro section z-50
        mixBlendMode: 'difference',
      }}
      animate={{
        x: -12,
        y: -12,
        scale: scale,
      }}
      transition={{
        x: { duration: 0 },
        y: { duration: 0 },
        scale: { duration: 0.15, ease: "easeOut" },
      }}
    >
      <motion.div
        className="w-6 h-6 rounded-full"
        animate={{
          backgroundColor: currentColor,
          boxShadow: isHovering
            ? `0 0 20px ${currentColor}80, 0 0 40px ${currentColor}60`
            : `0 0 15px ${currentColor}70`,
        }}
        transition={{
          backgroundColor: { duration: 0.4 },
          boxShadow: { duration: 0.2 },
        }}
      />
    </motion.div>
  );
};

export default UnifiedCursor;