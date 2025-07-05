'use client';

import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="text-white font-bold tracking-wide">Ahmed El-Baghdady</div>
      <div className="flex space-x-6">
        <a href="#home" className="text-white/70 hover:text-white transition-colors tracking-wide">Home</a>
        <a href="#projects" className="text-white/70 hover:text-white transition-colors tracking-wide">Projects</a>
        <a href="#about" className="text-white/70 hover:text-white transition-colors tracking-wide">About</a>
      </div>
    </nav>
  );
};

export default NavBar;