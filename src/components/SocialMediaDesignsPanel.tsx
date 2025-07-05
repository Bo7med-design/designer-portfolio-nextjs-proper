'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SocialMediaDesignsPanel: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, filter: 'blur(5px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center w-full h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Sweeping light effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-0 will-change-transform"
        style={{
          background: `
            radial-gradient(ellipse 50% 40% at 50% 30%, rgba(255, 255, 255, 0.08), transparent),
            radial-gradient(ellipse 80% 30% at 50% 90%, rgba(255, 255, 255, 0.05), transparent)
          `,
        }}
        animate={{
          transform: ['translateX(-20%)', 'translateX(20%)', 'translateX(-20%)'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <div className="absolute inset-0 bg-black/30" />

      <motion.div
        className="relative z-10 text-center max-w-5xl mx-auto px-6 will-change-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-100 leading-tight optimize-legibility"
          style={{ textShadow: '0px 8px 25px rgba(0, 0, 0, 0.5)' }}
          variants={itemVariants}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          Where Brands Tell Their Story
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto optimize-legibility"
          variants={itemVariants}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          A showcase of social media designs and brand identities, crafted with purpose and precision.
        </motion.p>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 text-gray-500 will-change-opacity"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            d="M12 5V19M12 19L19 12M12 19L5 12" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 2.2, duration: 1.5, ease: 'easeInOut' }}
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default SocialMediaDesignsPanel;