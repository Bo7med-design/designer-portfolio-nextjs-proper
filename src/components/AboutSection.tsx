'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const tools = [
    'Adobe Photoshop',
    'Adobe Illustrator', 
    'Adobe InDesign',
    'Adobe After Effects',
    'Figma',
    'Sketch'
  ];

  const skills = [
    'Brand Identity',
    'Logo Design',
    'Print Design',
    'Digital Design',
    'Typography',
    'Color Theory',
    'Layout Design',
    'Visual Communication'
  ];

  return (
    <section id="about" className="relative bg-black text-white py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-20 w-64 h-64 rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, #ffffff, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, #ffffff, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block text-sm uppercase tracking-[0.3em] text-gray-200 mb-6 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About Me
          </motion.span>

          <motion.h2
            className="text-6xl md:text-8xl font-black text-white mb-8 leading-none tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            AHMED
            <br />
            <span className="text-gray-100">EL-BAGHDADY</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Text */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.p
                className="text-2xl md:text-3xl text-white leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                I'm Ahmed El-Baghdady, a graphic designer with over{' '}
                <span className="font-semibold text-white">6 years of experience</span>.
              </motion.p>

              <motion.p
                className="text-lg text-gray-100 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Throughout my journey, I've explored a wide range of styles and creative fields.
                I'm a multi-passionate person who has tried various industries, but the one that 
                truly captured my heart is graphic design.
              </motion.p>

              <motion.p
                className="text-lg text-gray-100 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                My approach combines strategic thinking with creative execution, ensuring that 
                every design not only looks beautiful but also serves its intended purpose effectively.
              </motion.p>
            </div>

            {/* Experience Highlight */}
            <motion.div
              className="border-l-4 border-white pl-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">6+ Years</h3>
              <p className="text-gray-200">of professional design experience</p>
            </motion.div>
          </motion.div>

          {/* Skills & Tools */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Tools */}
            <div>
              <motion.h3
                className="text-2xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Tools & Software
              </motion.h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool}
                    className="px-4 py-3 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    whileHover={{
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      borderColor: 'rgba(255,255,255,0.3)',
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span className="text-sm font-medium text-white">{tool}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <motion.h3
                className="text-2xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Skills & Expertise
              </motion.h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="px-4 py-3 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    whileHover={{
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      borderColor: 'rgba(255,255,255,0.3)',
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span className="text-sm font-medium text-white">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto text-improved"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Ready to bring your vision to life? Let's create something extraordinary together.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="#footer"
              aria-label="Get in touch"
              className="inline-flex items-center justify-center w-48 px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
              <motion.span
                className="ml-2"
                animate={{ y: [0, 2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ↓
              </motion.span>
            </motion.a>

            <motion.a
              href="/ahmed_elboghdady_resume.pdf"
              download="Ahmed_Elboghdady_Resume.pdf"
              aria-label="Download resume"
              className="inline-flex items-center justify-center w-48 px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Download Resume
              <motion.span
                className="ml-2"
                animate={{ y: [0, -1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                ↓
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;