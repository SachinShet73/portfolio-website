import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedSection = ({ children, id, className = '', delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 transition-all duration-700 ${className} ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default AnimatedSection;