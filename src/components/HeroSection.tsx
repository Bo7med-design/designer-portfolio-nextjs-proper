'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-black">
      {/* Split Layout Container */}
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Image Only */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="relative h-screen will-change-transform"
        >
          <div className="absolute inset-0 w-full h-full">
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
              quality={90}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              fetchPriority="high"
            />
          </div>
          {/* Minimal edge blending only */}
          <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-black to-transparent" />
        </motion.div>

        {/* Right Side - Content */}
        <div className="relative bg-black flex items-center justify-center px-8 lg:px-16 xl:px-20 py-20">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
            className="w-full max-w-2xl will-change-transform"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-6 py-3 glass-effect rounded-full">
                <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse" />
                <span className="text-white/90 text-sm font-light tracking-[0.2em] uppercase optimize-legibility">
                  GRAPHIC DESIGNER & ART DIRECTOR
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7 }}
              className="mb-6"
            >
              <h1 className="text-6xl lg:text-7xl xl:text-8xl leading-[0.85] tracking-wide mb-4 optimize-legibility">
                <span className="block font-anton text-white will-change-auto">
                  AHMED
                </span>
                <span className="block text-5xl lg:text-6xl xl:text-7xl font-anton text-white/90 will-change-auto">
                  ELBOGHDADY
                </span>
              </h1>
            </motion.div>

            {/* Professional Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mb-8"
            >
              <p className="text-xl lg:text-2xl text-white/90 font-light leading-relaxed mb-6 max-w-xl text-balance tracking-wide optimize-legibility">
                Transforming brands through exceptional visual storytelling and innovative design solutions.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10"
            >
              <div>
                <div className="text-2xl font-light text-white mb-1 optimize-legibility">6+</div>
                <div className="text-sm text-white/70 font-light optimize-speed">Years</div>
              </div>
              <div>
                <div className="text-2xl font-light text-white mb-1 optimize-legibility">80+</div>
                <div className="text-sm text-white/70 font-light optimize-speed">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-light text-white mb-1 optimize-legibility">25+</div>
                <div className="text-sm text-white/70 font-light optimize-speed">Clients</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Elegant Transparent Explore Button at the Bottom */}
      <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2 flex flex-col items-center z-20">
        <span className="mb-2 text-white/80 text-lg tracking-widest uppercase font-light optimize-speed">Explore</span>
        <motion.a
          href="#social-media-panel"
          aria-label="Scroll to social media panel"
          initial={{ y: 0 }}
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="group flex flex-col items-center justify-center border border-white/30 rounded-full p-4 hover:border-white/60 hover:shadow-lg transition-all duration-300 bg-transparent will-change-transform"
          style={{ width: 56, height: 56 }}
        >
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
        </motion.a>
      </div>

      {/* Floating UI Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.8 }}
        className="absolute bottom-8 left-8 hidden lg:flex items-center space-x-4 text-white/70 text-xs uppercase tracking-[0.2em] optimize-speed"
      >
        <div className="w-12 h-px bg-white/30" />
        <span>Scroll Down</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        className="absolute top-8 right-8 hidden lg:block text-white/70 text-xs uppercase tracking-[0.2em] text-right optimize-speed"
      >
        <div>Portfolio</div>
        <div>2024</div>
      </motion.div>
    </section>
  );
};

export default HeroSection;