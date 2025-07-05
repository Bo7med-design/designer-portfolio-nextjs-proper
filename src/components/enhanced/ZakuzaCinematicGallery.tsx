'use client';

import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SimpleLightbox from '@/components/common/SimpleLightbox';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import ProjectDataService from '@/services/ProjectDataService';
import { useLightbox } from '@/hooks/useLightbox';

const ZakuzaCinematicGallery: React.FC = () => {
  const zakuza = ProjectDataService.getSocialMediaProject('zakuza');
  const [currentIndex, setCurrentIndex] = useState(0);

  const lightbox = useLightbox({
    images: zakuza?.images || [],
    initialIndex: currentIndex,
  });

  // Error handling for missing project data
  if (!zakuza) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <LoadingSpinner text="Loading Zakuza project..." />
      </div>
    );
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % zakuza.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + zakuza.images.length) % zakuza.images.length);
  };

  const getPosition = (index: number) => {
    const totalImages = zakuza.images.length;
    if (index === currentIndex) {
      return 'center';
    }
    if (index === (currentIndex - 1 + totalImages) % totalImages) {
      return 'left';
    }
    if (index === (currentIndex + 1) % totalImages) {
      return 'right';
    }
    return 'hidden';
  };

  const imageVariants = {
    center: {
      x: '0%',
      scale: 1,
      filter: 'blur(0px) brightness(1)',
      opacity: 1,
      zIndex: 3,
      boxShadow: '0px 20px 70px rgba(0, 0, 0, 0.5), 0px 0px 30px rgba(255, 255, 255, 0.1)'
    },
    left: {
      x: '-65%',
      scale: 0.75,
      filter: 'blur(8px) brightness(0.4)',
      opacity: 0.6,
      zIndex: 2
    },
    right: {
      x: '65%',
      scale: 0.75,
      filter: 'blur(8px) brightness(0.4)',
      opacity: 0.6,
      zIndex: 2
    },
    hidden: {
      opacity: 0,
      scale: 0.5,
      zIndex: 1
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section 
      className="relative w-full bg-black flex items-center justify-center py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      data-project="zakuza"
    >
      {/* Background FX */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black" />
      {/* Film grain effect - grain.png not found, using CSS noise instead */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, #fff 1px, transparent 1px),
                         radial-gradient(circle at 75% 75%, #fff 1px, transparent 1px)`,
        backgroundSize: '4px 4px, 6px 6px',
        backgroundPosition: '0 0, 2px 2px'
      }} />
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${zakuza.brand.colorPalette.primary}10, transparent 60%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-screen-2xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 z-10">
        {/* Left Panel: Project Story */}
        <motion.div
          className="lg:col-span-4 flex flex-col justify-center text-left"
        >
          <motion.div
            className="relative bg-black/20 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl shadow-black/50 backdrop-blur-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -inset-px rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
            >
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-3 sm:mb-4"
                style={{ color: zakuza.brand.colorPalette.primary }}
                variants={textVariants}
              >
                {zakuza.brand.name}
              </motion.h2>
              <motion.p
                className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed mb-6 sm:mb-8"
                variants={textVariants}
              >
                {zakuza.brand.description}
              </motion.p>

              <motion.div className="space-y-4 sm:space-y-6" variants={textVariants}>
                <div>
                  <h4 className="font-bold text-zinc-300 tracking-widest uppercase text-xs sm:text-sm lg:text-base mb-2 sm:mb-3">The Challenge</h4>
                  <p className="text-xs sm:text-sm lg:text-base text-zinc-300">To create a brand identity for a new café, "Zakuza," that feels both premium and deeply connected to nature, avoiding common café tropes to stand out in a saturated market.</p>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-300 tracking-widest uppercase text-xs sm:text-sm lg:text-base mb-2 sm:mb-3">The Concept</h4>
                  <p className="text-xs sm:text-sm lg:text-base text-zinc-300">"The Forest's Embrace." The brand story is built around a cinematic, almost mythical forest. The visual language uses deep shadows, focused light, and organic textures to evoke a sense of calm, mystery, and natural elegance.</p>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-300 tracking-widest uppercase text-xs sm:text-sm lg:text-base mb-2 sm:mb-3">Services</h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {['Branding', 'Visual Identity', 'Concept Design'].map(service => (
                      <span key={service} className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold rounded-full border-2 border-white/20 bg-white/5 text-white/80 hover:bg-white/10 hover:border-white/40 transition-all duration-300 cursor-default">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-300 tracking-widest uppercase text-xs sm:text-sm lg:text-base mb-2 sm:mb-3">Brand Characteristics</h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">
                    {zakuza.brand.personality.map((trait) => (
                      <span
                        key={trait}
                        className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold rounded-full border-2 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_1.5em_rgba(255,255,255,0.3)] hover:scale-105 cursor-default"
                        style={{
                          borderColor: `${zakuza.brand.colorPalette.primary}90`,
                          color: zakuza.brand.colorPalette.primary,
                          backgroundColor: `${zakuza.brand.colorPalette.primary}2A`
                        }}
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Panel: Cinematic Gallery */}
        <div className="lg:col-span-8 relative h-[50vh] sm:h-[60vh] lg:h-[70vh] max-h-[400px] sm:max-h-[500px] lg:max-h-[650px] flex items-center justify-center group lg:translate-y-8">
          <div className="relative w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[420px] h-full max-h-[392px] sm:max-h-[490px] lg:max-h-[588px] flex items-center justify-center">
            <AnimatePresence initial={false}>
              {zakuza.images.map((image, index) => {
                const position = getPosition(index);
                if (position === 'hidden') return null;

                const isCenter = position === 'center';

                return (
                  <motion.div
                    key={image}
                    className={`absolute w-full h-full rounded-xl sm:rounded-2xl overflow-hidden border-2 border-white/10 ${isCenter ? 'cursor-pointer' : 'cursor-pointer'}`}
                    variants={imageVariants}
                    initial="hidden"
                    animate={position}
                    exit="hidden"
                    whileHover={
                      isCenter
                        ? { scale: 1.05 }
                        : { scale: 0.8, filter: 'blur(4px) brightness(0.7)', opacity: 0.8 }
                    }
                    onClick={isCenter ? () => lightbox.open(currentIndex) : (index < currentIndex ? prevImage : nextImage)}
                  >
                    <img
                      src={image}
                      alt={`Zakuza Design ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {isCenter && (
                      <motion.div
                        className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-lg"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        Click to View
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-[-15px] sm:bottom-[-20px] lg:bottom-[-40px] xl:bottom-[-80px] flex items-center gap-3 sm:gap-4 z-20">
            <button
              onClick={prevImage}
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border border-white/10 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 text-sm sm:text-base"
            >
              ◀
            </button>
            <button
              onClick={nextImage}
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border border-white/10 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 text-sm sm:text-base"
            >
              ▶
            </button>
          </div>
        </div>
      </div>

      <SimpleLightbox
        isOpen={lightbox.isOpen}
        images={zakuza.images}
        currentIndex={lightbox.currentIndex}
        onClose={lightbox.close}
        onNext={lightbox.next}
        onPrev={lightbox.prev}
        title={`${zakuza.title} - Design ${lightbox.currentIndex + 1}`}
      />
    </section>
  );
};

const ZakuzaCinematicGalleryWithErrorBoundary: React.FC = () => (
  <ErrorBoundary>
    <ZakuzaCinematicGallery />
  </ErrorBoundary>
);

export default memo(ZakuzaCinematicGalleryWithErrorBoundary);