'use client';

import React from 'react';
import Image from 'next/image';
import { LazyMotionWrapper, MotionDiv } from './motion/LazyMotion';

const OptimizedHeroSection: React.FC = () => {
  return (
    <LazyMotionWrapper>
      <section id="home" className="relative min-h-screen overflow-hidden bg-black">
        {/* Split Layout Container */}
        <div className="hero-container">
          {/* Left Side - Image Only */}
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="relative h-screen will-change-transform"
          >
            <div className="hero-image">
              <Image
                src="/hero-image.webp"
                alt="Ahmed El-Baghdady - Graphic Designer"
                fill
                priority
                className="object-cover object-center"
                style={{
                  filter: 'blur(1px) brightness(0.8)',
                }}
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
            {/* Minimal edge blending */}
            <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-black to-transparent" />
          </MotionDiv>

          {/* Right Side - Content */}
          <div className="hero-content">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="w-full max-w-2xl will-change-transform"
            >
              {/* Premium Badge */}
              <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="mb-8"
              >
                <div className="inline-flex items-center px-6 py-3 glass-effect rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse" />
                  <span className="text-white/90 text-sm font-light tracking-[0.2em] uppercase">
                    GRAPHIC DESIGNER & ART DIRECTOR
                  </span>
                </div>
              </MotionDiv>

              {/* Main Heading */}
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
                className="mb-6"
              >
                <h1 className="hero-title mb-4">
                  <span className="block font-thin will-change-auto">
                    AHMED
                  </span>
                  <span className="hero-subtitle block will-change-auto">
                    ELBOGHDADY
                  </span>
                </h1>
              </MotionDiv>

              {/* Professional Description */}
              <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="mb-8"
              >
                <p className="text-xl lg:text-2xl text-white/90 font-light leading-relaxed mb-6 max-w-xl">
                  Transforming brands through exceptional visual storytelling and innovative design solutions.
                </p>
              </MotionDiv>

              {/* Stats Grid */}
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: 0.8 }}
                className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10"
              >
                <div>
                  <div className="text-2xl font-light text-white mb-1">6+</div>
                  <div className="text-sm text-white/70 font-light">Years</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-white mb-1">80+</div>
                  <div className="text-sm text-white/70 font-light">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-white mb-1">25+</div>
                  <div className="text-sm text-white/70 font-light">Clients</div>
                </div>
              </MotionDiv>
            </MotionDiv>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2 flex flex-col items-center z-20">
          <span className="mb-2 text-white/80 text-lg tracking-widest uppercase font-light">Explore</span>
          <MotionDiv
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            className="group flex flex-col items-center justify-center border border-white/30 rounded-full p-4 hover:border-white/60 transition-all duration-300 bg-transparent will-change-transform"
            style={{ width: 56, height: 56 }}
          >
            <a href="#social-media-panel" aria-label="Scroll to social media panel">
              <svg 
                className="w-7 h-7 text-white group-hover:text-blue-400 transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </MotionDiv>
        </div>

        {/* Floating UI Elements */}
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="absolute bottom-8 left-8 hidden lg:flex items-center space-x-4 text-white/70 text-xs uppercase tracking-[0.2em]"
        >
          <div className="w-12 h-px bg-white/30" />
          <span>Scroll Down</span>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="absolute top-8 right-8 hidden lg:block text-white/70 text-xs uppercase tracking-[0.2em] text-right"
        >
          <div>Portfolio</div>
          <div>2024</div>
        </MotionDiv>
      </section>
    </LazyMotionWrapper>
  );
};

export default OptimizedHeroSection;