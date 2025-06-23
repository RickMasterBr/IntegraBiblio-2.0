
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '', type = 'button' }) => {
  const baseStyle = 'px-8 py-3 font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  let variantStyle = '';
  switch (variant) {
    case 'primary':
      variantStyle = 'bg-brand-purple text-white hover:bg-brand-purple-light focus:ring-brand-purple';
      break;
    case 'secondary':
      variantStyle = 'bg-white text-brand-purple hover:bg-gray-100 focus:ring-brand-purple';
      break;
    case 'outline':
      variantStyle = 'bg-transparent border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white focus:ring-brand-purple';
      break;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
