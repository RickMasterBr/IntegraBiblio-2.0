
import React from 'react';

interface IconProps {
  className?: string;
}

export const MegaphoneIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg 
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M3 11v2a6 6 0 0 0 6 6h2M10 6L4 6"/>
      <path d="M10 6c0-2.33 2.25-3.5 4-3M10 18c0 2.33 2.25 3.5 4 3M14 3c2 0 4 .833 4 2.5v9c0 1.667-2 2.5-4 2.5M18 7h1M18 12h3M18 17h1"/>
    </svg>
  );
};
