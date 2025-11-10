"use client"; // This component MUST be a client component

import { useEffect } from 'react';
// We will remove the imports, as these will now be globally available
// on the `window` object from the layout file.

const SmoothScroller = () => {
  useEffect(() => {
    // Check if the libraries are loaded
    if (typeof window.Lenis === 'undefined' || typeof window.gsap === 'undefined') {
      console.error('SmoothScroller: Lenis or GSAP is not loaded.');
      return;
    }

    // 1. Initialize Lenis for smooth scrolling
    const lenis = new window.Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: true,
    });

    // 2. Connect Lenis to GSAP's ScrollTrigger
    // We must register the plugin, which is also on the window object
    window.gsap.registerPlugin(window.ScrollTrigger);
    
    lenis.on('scroll', window.ScrollTrigger.update);

    window.gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    window.gsap.ticker.lagSmoothing(0);

    // 3. Main animation loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 4. Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []); // Empty dependency array ensures this runs only once

  return null; // This component does not render any visible HTML
};

export default SmoothScroller;