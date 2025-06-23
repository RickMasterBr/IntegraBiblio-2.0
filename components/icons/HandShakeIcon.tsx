
import React from 'react';

interface IconProps {
  className?: string;
}

export const HandshakeIcon: React.FC<IconProps> = ({ className }) => {
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
      <path d="M16 17l-1.5-1.5a3.028 3.028 0 0 0-4.242 0L8 17"/>
      <path d="M16 17l4-4"/>
      <path d="M8 17l-4-4"/>
      <path d="M12.5 7.5L14 9"/>
      <path d="M12 2a10 10 0 00-9.67 12.36A10 10 0 0012 22a10 10 0 009.67-7.64A10 10 0 0012 2z" opacity="0.5"/>
       <path d="M14.5 5.5L16 7"/>
       <path d="M9.5 5.5L8 7"/>
       <path d="M11.5 7.5L10 9"/>
    </svg>
  );
};
