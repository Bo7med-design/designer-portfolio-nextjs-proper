'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BrezelJourneySection: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const designImages = [
    { src: "/brezel/brezel design 1.webp", alt: "Brezel Design 1" },
    { src: "/brezel/brezel design 2.webp", alt: "Brezel Design 2" },
    { src: "/brezel/brezel design 3.webp", alt: "Brezel Design 3" },
    { src: "/brezel/brezel design 4.webp", alt: "Brezel Design 4" },
    { src: "/brezel/brezel design 5.webp", alt: "Brezel Design 5" },
    { src: "/brezel/brezel design 6.webp", alt: "Brezel Design 6" },
  ];

  const menuImageSrcs = ["/brezel/left menu.webp", "/brezel/right menu.webp"];
  const allLightboxImages = [...designImages.map(img => img.src), ...menuImageSrcs];

  const handleNavigation = (direction: 'next' | 'prev') => {
    if (!selectedImg) return;
    const currentIndex = allLightboxImages.indexOf(selectedImg);
    if (currentIndex === -1) return;

    let nextIndex;
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % allLightboxImages.length;
    } else {
      nextIndex = (currentIndex - 1 + allLightboxImages.length) % allLightboxImages.length;
    }
    setSelectedImg(allLightboxImages[nextIndex]);
  };

  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-6xl md:text-8xl font-black text-white mb-8 leading-none tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            BREZEL
            <br />
            <span className="bg-gradient-to-r from-[#FF6B35] via-[#F7931E] to-[#FFD23F] bg-clip-text text-transparent">
              JOURNEY
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            A comprehensive brand identity project showcasing the complete process from concept to final implementation.
          </motion.p>
        </motion.div>

        {/* Brand Guideline Sheet */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-5xl font-black text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">
              Brand Guideline Sheet
            </span>
          </motion.h3>
          <div className="w-full h-[800px] overflow-y-scroll border-4 border-gray-800 rounded-lg">
            <img src="/brezel/brand guidline sheet.webp" alt="Brand Guideline Sheet" className="w-full" />
          </div>
          <p className="text-center text-gray-400 mt-8 max-w-3xl mx-auto">With the colors finalized, the logo completed, and the designs in place, we've also developed a brand guideline sheet to maintain consistency. The menu and packaging have been finalized as well, bringing the full brand system together</p>
        </motion.div>

        {/* BREZEL Design Collection */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-5xl font-black text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">
              BREZEL Design Collection
            </span>
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designImages.map((img, index) => (
              <motion.div
                key={index}
                className="cursor-pointer"
                whileHover={{ scale: 1.05, y: -10, boxShadow: '0px 20px 40px rgba(247, 147, 30, 0.25)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => setSelectedImg(img.src)}
              >
                <img src={img.src} alt={img.alt} className="w-full h-auto object-cover rounded-lg" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Menu for Brezel */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-5xl font-black text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">
              Menu for Brezel
            </span>
          </motion.h3>
          <div className="group relative flex justify-center items-center" style={{ perspective: '1200px' }}>
            <div className="absolute -inset-8 bg-gradient-to-r from-[#FF6B35]/10 to-[#F7931E]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
            <motion.div
              className="relative w-1/2 z-10 cursor-pointer"
              whileHover={{ scale: 1.05, rotateZ: -3, x: -30 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => setSelectedImg("/brezel/left menu.webp")}
            >
              <img src="/brezel/left menu.webp" alt="Left Menu" className="w-full rounded-lg shadow-2xl shadow-black" />
            </motion.div>
            <motion.div
              className="relative w-1/2 z-0 -ml-12 cursor-pointer"
              whileHover={{ scale: 1.05, rotateZ: 3, x: 30 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => setSelectedImg("/brezel/right menu.webp")}
            >
              <img src="/brezel/right menu.webp" alt="Right Menu" className="w-full rounded-lg shadow-2xl shadow-black" />
            </motion.div>
          </div>
        </motion.div>

        {/* End of the Journey */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-6xl font-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="bg-gradient-to-r from-[#FF6B35] via-[#F7931E] to-[#FFD23F] bg-clip-text text-transparent">
              End of the Journey
            </span>
          </motion.h3>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedImg(null);
              }
            }}
          >
            <motion.button
              onClick={(e) => { e.stopPropagation(); handleNavigation('prev'); }}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/50 rounded-full w-12 h-12 flex items-center justify-center z-50"
              whileHover={{ scale: 1.2, backgroundColor: 'rgba(0,0,0,0.7)' }}
            >
              &larr;
            </motion.button>
            
            <motion.img
              key={selectedImg}
              src={selectedImg}
              alt="Full screen view"
              className="max-w-[80vw] max-h-[90vh] object-contain rounded-lg"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            />

            <motion.button
              onClick={(e) => { e.stopPropagation(); handleNavigation('next'); }}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/50 rounded-full w-12 h-12 flex items-center justify-center z-50"
              whileHover={{ scale: 1.2, backgroundColor: 'rgba(0,0,0,0.7)' }}
            >
              &rarr;
            </motion.button>

            <motion.button
              onClick={() => setSelectedImg(null)}
              className="absolute top-5 right-5 text-white text-3xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
              whileHover={{ scale: 1.2, rotate: 90 }}
            >
              &times;
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BrezelJourneySection;