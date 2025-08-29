import React, { useEffect, useRef } from 'react';

interface StaggeredFadeInProps {
  children: React.ReactNode;
  className?: string;
}

const StaggeredFadeIn: React.FC<StaggeredFadeInProps> = ({ children, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const childrenArray = Array.from(container.children);
            childrenArray.forEach((child, index) => {
              if (child instanceof HTMLElement) {
                child.style.animationDelay = `${index * 100}ms`;
                child.classList.add('stagger-child-animate');
              }
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className={`${className} stagger-container`}>
      {children}
    </div>
  );
};

export default StaggeredFadeIn;