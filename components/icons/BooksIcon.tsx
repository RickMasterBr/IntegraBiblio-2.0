
import React from 'react';

interface IconProps {
  className?: string;
}

export const BooksIcon: React.FC<IconProps> = ({ className }) => {
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
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v15H6.5A2.5 2.5 0 0 1 4 14.5V4A2.5 2.5 0 0 1 6.5 2z"/>
      <path d="M4 6h1M4 9h1M4 12h1"/>
      <rect x="9" y="5" width="8" height="2" rx="1" fill="currentColor" strokeWidth="0"/>
      <rect x="9" y="9" width="6" height="2" rx="1" fill="currentColor" strokeWidth="0"/>
    </svg>
  );
};
