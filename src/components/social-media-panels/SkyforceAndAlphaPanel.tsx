'use client';

import React, { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { socialMediaProjects } from '@/data/projectsData';
import { getProjectColorClasses } from '@/utils/colorUtils';

const SkyforceAndAlphaPanel: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const skyforce = socialMediaProjects.find(p => p.id === 'skyforce')!;
    const alpha = socialMediaProjects.find(p => p.id === 'alpha')!;

    // Simplified animations - removed complex appearing effects

    const BrandColumn: React.FC<{ project: typeof skyforce }> = ({ project }) => {
        const colors = getProjectColorClasses(project.id);
        const brandColor = project.brand.colorPalette.primary;
        const images = project.images.slice(0, 4);

        return (
            <motion.div 
                className="relative w-full md:w-1/2 flex flex-col items-center justify-center min-h-screen p-6 md:p-12 overflow-hidden"
                style={{ 
                    background: `radial-gradient(ellipse at 50% 0%, ${brandColor}22, transparent 60%), #040404`
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="absolute inset-0 w-full h-full bg-black/20 backdrop-blur-sm"></div>
                <div className="relative z-10 w-full max-w-2xl text-center">
                    <motion.h2 
                        className={`text-6xl md:text-8xl font-anton tracking-tighter mb-4 ${colors.text}`}
                        style={{ textShadow: `0 0 30px ${brandColor}60, 0 0 50px ${brandColor}30` }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {project.title}
                    </motion.h2>
                    <motion.p 
                        className="text-base md:text-lg text-gray-300/90 max-w-md mx-auto leading-relaxed mb-10 font-readex"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {project.brand.details}
                    </motion.p>
                </div>

                <div className="relative z-10 w-full max-w-xl grid grid-cols-2 gap-5">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            className="relative group cursor-pointer rounded-xl overflow-hidden border border-white/10 shadow-2xl aspect-square transition-transform hover:scale-105"
                            style={{ boxShadow: `0 10px 20px ${brandColor}1A, 0 2px 5px rgba(0,0,0,0.5)` }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedImage(image)}
                        >
                            <img src={image} alt={`${project.title} design ${index + 1}`} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white text-5xl opacity-90 group-hover:scale-110 transition-transform"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        );
    }

    return (
        <div className="w-full flex flex-col md:flex-row bg-black">
            <BrandColumn project={skyforce} />
            <div className="w-full md:w-px h-px md:h-auto bg-gradient-to-b from-transparent via-gray-800 to-transparent"></div>
            <BrandColumn project={alpha} />

            <AnimatePresence>
              {selectedImage && (
                <motion.div
                  className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedImage(null)}
                >
                  <motion.div
                    className="relative max-w-4xl max-h-full"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={selectedImage}
                      alt="Selected design"
                      className="max-w-full max-h-full object-contain"
                    />
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="absolute top-4 right-4 text-white hover:text-gray-400 text-2xl w-10 h-10 flex items-center justify-center bg-black/50 rounded-full"
                    >
                      ×
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
        </div>
    );
};

export default memo(SkyforceAndAlphaPanel);