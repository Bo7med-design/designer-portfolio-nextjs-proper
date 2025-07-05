'use client';

import { useState, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useScrollSection } from '@/hooks/useScrollSection';
import { initWebVitals, monitorCustomMetrics, monitorErrors } from '@/utils/webVitals';
import { registerServiceWorker } from '@/utils/serviceWorker';

// Critical components loaded immediately
import PerformantHeroSection from '@/components/PerformantHeroSection';
import UnifiedCursor from '@/components/UnifiedCursor';

// Lazy load EVERYTHING else to reduce initial bundle
const IntroSection = dynamic(() => import('@/components/IntroSection'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
    <div className="w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
  </div>
});

const SocialMediaDesignsPanel = dynamic(() => import('@/components/SocialMediaDesignsPanel'), {
  ssr: false,
  loading: () => <div className="h-screen bg-black" />
});

const AboutSection = dynamic(() => import('@/components/AboutSection'), {
  ssr: false,
  loading: () => <div className="h-screen bg-black" />
});

const NavBar = dynamic(() => import('@/components/NavBar'), {
  ssr: false,
  loading: () => null
});

const ScrollProgress = dynamic(() => import('@/components/ScrollProgress'), {
  ssr: false,
  loading: () => null
});

// Ultra-lazy load gallery sections
const ZakuzaCinematicGallery = dynamic(() => import('@/components/enhanced/ZakuzaCinematicGallery'), {
  ssr: false,
  loading: () => <div className="h-screen bg-black" />
});

const ZamboAndMondyPanel = dynamic(() => import('@/components/social-media-panels/ZamboAndMondyPanel'), {
  ssr: false,
  loading: () => <div className="h-screen bg-black" />
});

const SkyforceAndAlphaPanel = dynamic(() => import('@/components/social-media-panels/SkyforceAndAlphaPanel'), {
  ssr: false,
  loading: () => <div className="h-screen bg-black" />
});

const BrezelJourneySection = dynamic(() => import('@/components/enhanced/BrezelJourneySection'), {
  ssr: false,
  loading: () => <div className="h-screen bg-black" />
});

const PalmCollectionsSection = dynamic(() => import('@/components/enhanced/PalmCollectionsSection'), {
  ssr: false,
  loading: () => <div className="h-screen bg-black" />
});

const MarqueeSection = dynamic(() => import('@/components/MarqueeSection'), {
  ssr: false,
  loading: () => <div className="h-32 bg-black" />
});

const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: false,
  loading: () => <div className="h-32 bg-black" />
});

// Section background colors for smooth transitions
const sectionColors: { [key: string]: string } = {
  'social-media-panel': '#000000',
  'zakuza-cinematic-gallery': '#1a1a1a',
  'zambo-and-mondy-panel': '#000000',
  'skyforce-and-alpha-panel': '#1a1a1a',
  'brezel-journey': '#000000',
  'palm-collections': '#1a1a1a',
  'about': '#000000',
};

export default function HomePage() {
  const [showMainContent, setShowMainContent] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [sectionsLoaded, setSectionsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const sectionIds = ['social-media-panel', 'zakuza-cinematic-gallery', 'zambo-and-mondy-panel', 'skyforce-and-alpha-panel', 'brezel-journey', 'palm-collections', 'about'];
  const currentSection = useScrollSection(sectionIds);

  // Initialize performance monitoring
  useEffect(() => {
    // Check if mobile/tablet
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
      return mobile;
    };

    const mobile = checkMobile();

    // Initialize Web Vitals monitoring
    initWebVitals();
    monitorCustomMetrics();
    monitorErrors();

    // Register service worker for caching
    registerServiceWorker({
      onSuccess: () => console.log('SW: Registered successfully'),
      onUpdate: () => console.log('SW: New content available'),
    });

    // If mobile, skip intro and go straight to main content
    if (mobile) {
      setShowIntro(false);
      setShowMainContent(true);
      // Load sections faster on mobile
      const mobileTimer = setTimeout(() => {
        setSectionsLoaded(true);
      }, 1000);
      return () => clearTimeout(mobileTimer);
    } else {
      // Desktop: delay loading sections until after hero is rendered
      const timer = setTimeout(() => {
        setSectionsLoaded(true);
      }, 2000); // Reduced delay for better performance
      return () => clearTimeout(timer);
    }
  }, []);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
    setShowMainContent(true);
  }, []);

  return (
    <>
      {/* Load cursor for all states - it handles mobile detection internally */}
      <UnifiedCursor />
      
      {showIntro && !isMobile && (
        <IntroSection key="intro" onComplete={handleIntroComplete} />
      )}

      {showMainContent && (
        <div
          className="text-white min-h-screen font-sans transition-colors duration-1000 ease-in-out"
          style={{ backgroundColor: sectionColors[currentSection] || '#000000' }}
        >
          {/* Load navigation after hero */}
          {sectionsLoaded && (
            <>
              <ScrollProgress />
              <NavBar />
            </>
          )}
          
          <main className="relative">
            {/* Critical hero section with improved animations */}
            <PerformantHeroSection />
            
            {/* Load sections progressively */}
            {sectionsLoaded && (
              <>
                <section id="social-media-panel" data-project="social-media">
                  <SocialMediaDesignsPanel />
                </section>
                
                <section id="zakuza-cinematic-gallery" data-project="zakuza">
                  <ZakuzaCinematicGallery />
                </section>
                
                <section id="zambo-and-mondy-panel" data-project="zambo">
                  <ZamboAndMondyPanel />
                </section>
                
                <section id="skyforce-and-alpha-panel" data-project="skyforce">
                  <SkyforceAndAlphaPanel />
                </section>
                
                <section id="brezel-journey" data-project="brezel">
                  <BrezelJourneySection />
                </section>
                
                <section id="palm-collections" data-project="palm">
                  <PalmCollectionsSection />
                </section>
                
                <MarqueeSection />
                
                <section id="about">
                  <AboutSection />
                </section>
              </>
            )}
          </main>
          
          {sectionsLoaded && <Footer />}
        </div>
      )}
    </>
  );
}