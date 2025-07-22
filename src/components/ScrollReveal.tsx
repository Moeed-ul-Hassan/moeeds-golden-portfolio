import React, { useEffect, useRef } from 'react';

const ScrollReveal: React.FC<{ children: React.ReactNode; direction?: 'up' | 'left' | 'right'; delay?: number }> = ({ 
  children, 
  direction = 'up', 
  delay = 0 
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('revealed');
            }, delay * 100);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getClassName = () => {
    switch (direction) {
      case 'left':
        return 'reveal-left';
      case 'right':
        return 'reveal-right';
      default:
        return 'reveal';
    }
  };

  return (
    <div ref={elementRef} className={getClassName()}>
      {children}
    </div>
  );
};

export default ScrollReveal;