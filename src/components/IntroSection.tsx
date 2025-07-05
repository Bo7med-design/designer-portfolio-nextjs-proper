'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import ClickableButton from './ClickableButton';

interface IntroSectionProps {
  onComplete?: () => void;
}

// Type-safe fullscreen API interface
interface ExtendedHTMLElement extends HTMLElement {
  webkitRequestFullscreen?: () => Promise<void>;
  mozRequestFullScreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

const IntroSection: React.FC<IntroSectionProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [canFullscreen, setCanFullscreen] = useState(false);

  useEffect(() => {
    // Check if device supports fullscreen and is desktop
    const checkFullscreenSupport = () => {
      const isDesktop = window.innerWidth >= 1024 && window.innerHeight >= 768;
      
      const docElement = document.documentElement as ExtendedHTMLElement;
      const hasFullscreenAPI = !!(
        docElement.requestFullscreen ||
        docElement.webkitRequestFullscreen ||
        docElement.mozRequestFullScreen ||
        docElement.msRequestFullscreen
      );
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      return isDesktop && hasFullscreenAPI && !isMobile;
    };

    setCanFullscreen(checkFullscreenSupport());

    // If mobile or can't fullscreen, skip intro
    if (!checkFullscreenSupport()) {
      setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, 100);
      return;
    }

    // Optimized timers for desktop
    const contentTimer = setTimeout(() => setShowContent(true), 200);
    const buttonTimer = setTimeout(() => setShowButton(true), 1200);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(buttonTimer);
    };
  }, [onComplete]);

  const handleEnterClick = useCallback(async () => {
    if (isExiting) return;
    setIsExiting(true);

    try {
      if (!document.fullscreenElement && canFullscreen) {
        await document.documentElement.requestFullscreen();
      }
    } catch {
      console.log('Fullscreen not supported, proceeding anyway');
    }

    // Faster exit
    setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 500);
  }, [isExiting, onComplete, canFullscreen]);

  // Don't render intro on mobile/unsupported devices
  if (!canFullscreen && !isVisible) {
    return null;
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      {/* Minimal Background - Fixed positions for SSR consistency */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-0.5 h-0.5 bg-white/8 rounded-full will-change-transform"
          style={{ left: '30%', top: '20%' }}
          animate={{
            opacity: [0, 0.2, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 0,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-0.5 h-0.5 bg-white/8 rounded-full will-change-transform"
          style={{ left: '70%', top: '60%' }}
          animate={{
            opacity: [0, 0.2, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 2,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-0.5 h-0.5 bg-white/8 rounded-full will-change-transform"
          style={{ left: '50%', top: '80%' }}
          animate={{
            opacity: [0, 0.2, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 4,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Content - Optimized animations */}
      <motion.div
        className="relative text-center will-change-transform"
        initial={{ x: -20, opacity: 0 }}
        animate={{
          x: isExiting ? 25 : (showContent ? 0 : -20),
          opacity: isExiting ? 0 : (showContent ? 1 : 0)
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut"
        }}
      >
        {/* Name with enhanced glow */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-anton text-white leading-none select-none mb-6 will-change-transform relative tracking-wide optimize-legibility"
          style={{
            letterSpacing: '-0.02em',
            textShadow: '0 0 40px rgba(255, 255, 255, 0.4), 0 0 80px rgba(255, 255, 255, 0.2)'
          }}
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: showContent ? 1 : 0,
            y: showContent ? 0 : 15
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: "easeOut"
          }}
        >
          Ahmed Elboghdady

          {/* Optimized background glow */}
          <div
            className="absolute inset-0 -z-10 opacity-40"
            style={{
              background: 'radial-gradient(ellipse 100% 40% at center, rgba(255, 255, 255, 0.08) 0%, transparent 50%)',
              filter: 'blur(15px)',
              transform: 'scale(1.1)'
            }}
          />
        </motion.h1>

        {/* Job Title - Simplified */}
        <motion.div
          className="space-y-3 will-change-transform"
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: showContent ? 1 : 0,
            y: showContent ? 0 : 15
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: "easeOut"
          }}
        >
          <h2 className="text-lg md:text-xl text-white/75 font-readex font-light tracking-[0.2em] uppercase optimize-speed">
            GRAPHIC DESIGNER
          </h2>

          <div className="flex items-center justify-center space-x-6 text-white/55">
            <div className="w-6 h-px bg-white/30" />
            <span className="text-sm font-readex font-light tracking-[0.25em] uppercase optimize-speed">
              ART DIRECTOR
            </span>
            <div className="w-6 h-px bg-white/30" />
          </div>
        </motion.div>

        {/* Subtle Background Glow - Reduced for performance */}
        <motion.div
          className="absolute inset-0 -z-10 will-change-transform"
          style={{
            background: 'radial-gradient(ellipse 400px 250px at center, rgba(255, 255, 255, 0.04) 0%, transparent 60%)',
            filter: 'blur(30px)'
          }}
          animate={{
            opacity: showContent ? 0.3 : 0
          }}
          transition={{
            duration: 1,
            ease: "easeOut"
          }}
        />
      </motion.div>

      {/* Enhanced Enter Button */}
      {showButton && !isExiting && (
        <motion.div
          className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 z-[9999]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-white/40 text-xs mb-4 text-center font-readex font-light tracking-[0.25em] uppercase optimize-speed">
            For the Ultimate Experience
          </p>

          <div className="relative flex justify-center">
            <ClickableButton
              onClick={handleEnterClick}
              className="group relative px-10 py-4 glass-effect text-white font-light tracking-wider transition-all duration-300 hover:border-white/50 hover:bg-white/10 cursor-pointer will-change-transform"
              style={{
                fontSize: '12px',
                letterSpacing: '0.2em',
                borderRadius: '4px',
                zIndex: 10000,
                pointerEvents: 'auto',
                position: 'relative',
                outline: 'none'
              }}
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm" />

              <div className="relative z-10 flex items-center justify-center space-x-3">
                <svg
                  className="w-4 h-4 opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                </svg>

                <span className="uppercase font-light opacity-80 group-hover:opacity-100 transition-opacity duration-300 optimize-speed">
                  Enter Portfolio
                </span>
              </div>
            </ClickableButton>

            {/* Ambient button glow */}
            <div className="absolute inset-0 bg-white/10 blur-lg opacity-20 rounded-full scale-110 -z-10" />
          </div>
        </motion.div>
      )}

      {/* Exit Overlay - Optimized */}
      <motion.div
        className="absolute inset-0 bg-black will-change-transform"
        initial={{ opacity: 0 }}
        animate={{ opacity: isExiting ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
};

export default IntroSection;