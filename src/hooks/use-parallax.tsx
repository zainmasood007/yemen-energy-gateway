import { useState, useEffect, useCallback, RefObject } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
}

export function useParallax(options: ParallaxOptions = {}) {
  const { speed = 0.5, direction = 'up' } = options;
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const multiplier = direction === 'up' ? -1 : 1;
    setOffset(scrollY * speed * multiplier);
  }, [speed, direction]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return offset;
}

export function useElementParallax(ref: RefObject<HTMLElement>, options: ParallaxOptions = {}) {
  const { speed = 0.3 } = options;
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '100px' }
    );

    observer.observe(element);

    const handleScroll = () => {
      if (!isVisible) return;
      const rect = element.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const distance = elementCenter - viewportCenter;
      setOffset(distance * speed * -1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, speed, isVisible]);

  return { offset, isVisible };
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;
      setProgress(scrollHeight > 0 ? scrollY / scrollHeight : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}