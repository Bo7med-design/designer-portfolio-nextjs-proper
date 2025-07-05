'use client';

import React, { useState, useRef, memo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { palmProject } from '@/data/projectsData';

interface PalmCollectionsSectionProps {
  className?: string;
}

const PalmCollectionsSection: React.FC<PalmCollectionsSectionProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const collections = palmProject.collections || [];
  const [selectedCollection, setSelectedCollection] = useState<typeof collections[0] | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const collectionColors: { [key: string]: string } = {
    'palm1': '#FF0000', // Red
    'palm2': '#00BFFF', // Light Blue
    'palm3': '#FFA500', // Orange
  };

  const CollectionContainer: React.FC<{
    collection: typeof collections[0];
    index: number;
  }> = ({ collection, index }) => {
    const color = collectionColors[collection.id] || '#FFFFFF';

    return (
      <motion.div
        className="relative group cursor-pointer"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        viewport={{ once: true }}
        onClick={() => setSelectedCollection(collection)}
      >
        <motion.div
          className="relative overflow-hidden rounded-2xl border-2 border-white/10 transition-all duration-500"
          whileHover={{ scale: 1.02, boxShadow: `0px 20px 40px ${color}20` }}
        >
          <div className="aspect-square overflow-hidden">
            <img
              src={collection.images[0]}
              alt={collection.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              {collection.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {collection.description}
            </p>
            <div className="flex items-center justify-between">
              <span style={{ color }} className="text-sm font-medium">
                {collection.images.length} Designs
              </span>
              <span className="text-sm text-white">View Collection</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div ref={containerRef} className={`relative py-20 overflow-hidden bg-black ${className}`}>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/20 to-black" />
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 10% 20%, rgba(0, 191, 255, 0.1) 0%, transparent 25%),' +
              'radial-gradient(circle at 80% 30%, rgba(0, 191, 255, 0.1) 0%, transparent 25%),' +
              'radial-gradient(circle at 30% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 20%)',
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block text-sm uppercase tracking-[0.3em] text-blue-300 mb-6 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Fashion Design
          </motion.span>

          <motion.h2
            className="text-6xl md:text-8xl font-black text-white mb-8 leading-none tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            PALM
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">
              COLLECTIONS
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Three distinct clothing design series showcasing versatility in fashion design and brand storytelling through innovative apparel concepts.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <CollectionContainer
              key={collection.id}
              collection={collection}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="mt-20 pt-16 border-t border-white/10 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            About PALM Fashion
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            PALM represents the intersection of contemporary fashion and innovative design thinking. 
            Each collection explores different aspects of modern apparel design, from streetwear aesthetics 
            to avant-garde concepts, showcasing versatility and creative excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {palmProject.brand.personality.map((trait, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium rounded-full border border-blue-400 text-blue-300 bg-black/50"
              >
                {trait}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedCollection && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto"
            style={{ scrollSnapType: 'y mandatory' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCollection(null)}
          >
            <button
              onClick={() => setSelectedCollection(null)}
              className="fixed top-6 right-6 text-white hover:text-gray-400 text-3xl w-12 h-12 flex items-center justify-center bg-black/50 rounded-full backdrop-blur-sm z-50"
            >
              &times;
            </button>

            <div className="relative w-full h-full flex flex-col items-center">
              {selectedCollection.images.map((image: string, imgIndex: number) => (
                <div
                  key={imgIndex}
                  className="h-screen w-full flex items-center justify-center p-8 relative"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <motion.div
                    className="w-full h-full flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={image}
                      alt={`${selectedCollection.title} design ${imgIndex + 1}`}
                      className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                      style={{ 
                        border: `2px solid ${collectionColors[selectedCollection.id] || '#FFFFFF'}`,
                        boxShadow: `0 0 30px ${collectionColors[selectedCollection.id] || '#FFFFFF'}20`
                      }}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default memo(PalmCollectionsSection);