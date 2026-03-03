'use client';
import { useEffect, useRef } from 'react';

interface AnimateProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';
  variant?:   'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';
  delay?: number;
}

export function Animate({ children, className = '', animation, variant, delay = 0 }: AnimateProps) {
  const ref  = useRef<HTMLDivElement>(null);
  const anim = variant || animation || 'fade-up';

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (delay) el.style.transitionDelay = `${delay * 1000}ms`;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('in-view'); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`animate-${anim} ${className}`}>
      {children}
    </div>
  );
}

export default Animate;
