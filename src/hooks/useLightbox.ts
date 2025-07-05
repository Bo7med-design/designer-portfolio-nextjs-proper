'use client';

import { useState, useCallback, useEffect } from 'react';

interface UseLightboxOptions {
  images: string[];
  initialIndex?: number;
  enableKeyboard?: boolean;
  enableBodyScrollLock?: boolean;
}

interface UseLightboxReturn {
  isOpen: boolean;
  currentIndex: number;
  currentImage: string | null;
  open: (index?: number) => void;
  close: () => void;
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
}

/**
 * Reusable lightbox hook to eliminate code duplication
 * Provides consistent lightbox functionality across components
 */
export const useLightbox = ({
  images,
  initialIndex = 0,
  enableKeyboard = true,
  enableBodyScrollLock = true,
}: UseLightboxOptions): UseLightboxReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const open = useCallback((index: number = initialIndex) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index);
      setIsOpen(true);
    }
  }, [images.length, initialIndex]);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const next = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goTo = useCallback((index: number) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index);
    }
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen || !enableKeyboard) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          close();
          break;
        case 'ArrowLeft':
          prev();
          break;
        case 'ArrowRight':
          next();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, enableKeyboard, close, next, prev]);

  // Body scroll lock
  useEffect(() => {
    if (!enableBodyScrollLock) return;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, enableBodyScrollLock]);

  const currentImage = images[currentIndex] || null;

  return {
    isOpen,
    currentIndex,
    currentImage,
    open,
    close,
    next,
    prev,
    goTo,
  };
};