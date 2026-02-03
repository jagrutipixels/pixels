
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizes = {
    // Adjusted sizes for the wordmark logo to ensure it remains legible but professional
    sm: 'h-8',
    md: 'h-14',
    lg: 'h-24'
  };

  // Updated URL to the specific wordmark version provided by the user
  const logoUrl = "https://raw.githubusercontent.com/icreatepixels/DBNFRUITS/faf4fb74b284bbeadcb90fc7abeac9f59a61a107/dbntext.png";

  return (
    <div className={`flex items-center justify-center group ${className}`}>
      <div className={`relative ${sizes[size]} w-auto flex items-center justify-center transition-all duration-500 group-hover:scale-[1.03]`}>
        <img 
          src={logoUrl} 
          alt="DBN Fruits" 
          className="h-full w-auto object-contain block drop-shadow-sm" 
        />
      </div>
    </div>
  );
};

export default Logo;
