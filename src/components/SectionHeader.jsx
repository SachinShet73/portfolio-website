import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SectionHeader = ({ icon: Icon, title, subtitle }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div 
      ref={ref}
      className={`text-center mb-16 transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex items-center justify-center gap-3 mb-4 group">
        {Icon && (
          <div className="relative">
            <div className="absolute inset-0 bg-amber-200/20 rounded-lg blur-xl group-hover:blur-2xl transition-all" />
            <Icon className="w-8 h-8 text-amber-200/80 relative z-10 transform group-hover:scale-110 transition-transform" />
          </div>
        )}
        <h2 className="text-3xl sm:text-4xl font-bold text-white group-hover:text-amber-200/90 transition-colors">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-amber-200/60 text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;