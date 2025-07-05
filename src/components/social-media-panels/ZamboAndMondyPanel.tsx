'use client';

import React, { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { socialMediaProjects } from '@/data/projectsData';
import { getProjectColorClasses } from '@/utils/colorUtils';

const ZamboAndMondyPanel: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const zambo = socialMediaProjects.find(p => p.id === 'zambo')!;
    const mondy = socialMediaProjects.find(p => p.id === 'mondy')!;

    // Simplified animations - removed complex staggering and appearing effects

    const BrandSection: React.FC<{ project: typeof zambo | typeof mondy, images: string[] }> = ({ project, images }) => {
        const colors = getProjectColorClasses(project.id);
        const brandColor = project.brand.colorPalette.primary;

        return (
            <motion.div 
                className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center min-h-screen"
                style={{
                    background: `radial-gradient(ellipse at top, ${brandColor}20, transparent 60%), radial-gradient(ellipse at bottom, ${brandColor}10, transparent 50%), #0a0a0a`
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="text-center md:text-left mb-8">
                    <motion.h2 
                        className={`text-6xl md:text-8xl font-anton tracking-tighter mb-4 ${colors.text}`}
                        style={{ textShadow: `0 0 30px ${brandColor}50` }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {project.title.toUpperCase()}
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-gray-300 leading-relaxed font-readex"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {project.brand.details}
                    </motion.p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            className="relative group cursor-pointer aspect-square rounded-2xl overflow-hidden border-2 border-gray-800/50 shadow-lg transition-transform hover:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedImage(image)}
                        >
                            <img src={image} alt={`${project.title} design ${index + 1}`} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                                 style={{
                                    background: `linear-gradient(to top, ${brandColor}90, transparent)`
                                 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white text-5xl transform transition-transform group-hover:scale-125"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        );
    };

    return (
        <div className="w-full flex flex-col md:flex-row">
            <BrandSection project={zambo} images={zambo.images.slice(0, 6)} />
            <BrandSection project={mondy} images={mondy.images.slice(0, 6)} />

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

export default memo(ZamboAndMondyPanel);