import { useState, useEffect } from 'react';

interface MobileOptimizationState {
  isMobile: boolean;
  isTablet: boolean;
  isLandscape: boolean;
  screenSize: 'small' | 'medium' | 'large';
  reducedMotion: boolean;
  touchDevice: boolean;
}

export const useMobileOptimization = (): MobileOptimizationState => {
  const [state, setState] = useState<MobileOptimizationState>({
    isMobile: false,
    isTablet: false,
    isLandscape: false,
    screenSize: 'large',
    reducedMotion: false,
    touchDevice: false,
  });

  useEffect(() => {
    const updateState = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setState({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isLandscape: width > height,
        screenSize: width < 640 ? 'small' : width < 1024 ? 'medium' : 'large',
        reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        touchDevice: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
      });
    };

    // Initial check
    updateState();

    // Listen for changes
    window.addEventListener('resize', updateState);
    window.addEventListener('orientationchange', updateState);

    // Listen for reduced motion preference changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', updateState);

    return () => {
      window.removeEventListener('resize', updateState);
      window.removeEventListener('orientationchange', updateState);
      mediaQuery.removeEventListener('change', updateState);
    };
  }, []);

  return state;
};

// Hook for optimizing animations based on device capabilities
export const useAnimationOptimization = () => {
  const { isMobile, reducedMotion } = useMobileOptimization();

  return {
    shouldReduceAnimations: isMobile || reducedMotion,
    particleCount: isMobile ? 5 : 20,
    animationDuration: isMobile ? 0.3 : 0.6,
    enableComplexEffects: !isMobile && !reducedMotion,
  };
};

// Hook for touch optimization
export const useTouchOptimization = () => {
  const { touchDevice, isMobile } = useMobileOptimization();

  return {
    touchDevice,
    minTouchTarget: isMobile ? 44 : 40,
    tapDelay: touchDevice ? 0 : 300,
    hoverEnabled: !touchDevice,
  };
};