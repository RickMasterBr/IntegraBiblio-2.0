
import React from 'react';

interface LogoProps {
  className?: string;
  textColor?: string;
  iconColor?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '', textColor = 'text-white', iconColor = 'fill-brand-purple' }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 50 50" className={iconColor}>
        <rect x="5" y="10" width="8" height="30" rx="2" />
        <rect x="15" y="20" width="8" height="20" rx="2" />
        <rect x="25" y="10" width="8" height="30" rx="2" />
        <rect x="35" y="20" width="8" height="20" rx="2" />
        <rect x="5" y="42" width="38" height="6" rx="2" />
      </svg>
      <span className={`text-2xl font-bold ${textColor}`}>INTEGRA BIBLIO</span>
    </div>
  );
};

export default Logo;
