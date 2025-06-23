
import React from 'react';

interface IconProps {
  className?: string;
}

export const AccessibilityIcon: React.FC<IconProps> = ({ className }) => {
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
      <path d="M12 1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5zM12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
      <path d="M12 10c-2.67 0-8 1.336-8 4v4.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V14c0-2.664-5.33-4-8-4zm-6.5 7V14c.159-.623 2.062-1.5 6.5-1.5s6.341.877 6.5 1.5v3.5h-13z"/>
      <path d="M6 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-6zm11 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-6z"/>
    </svg>
  );
};
