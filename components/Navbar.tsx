
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav className="fixed w-full z-[60] bg-white/95 backdrop-blur-md border-b border-brand-gold/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-[1.01] shrink-0">
              <Logo size="md" />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-10">
              <Link to="/" className={`font-bold transition-all uppercase text-[10px] tracking-[0.3em] ${location.pathname === '/' ? 'text-brand-gold' : 'text-brand-green hover:text-brand-gold'}`}>Home</Link>
              <Link to="/products" className={`font-bold transition-all uppercase text-[10px] tracking-[0.3em] ${location.pathname === '/products' ? 'text-brand-gold' : 'text-brand-green hover:text-brand-gold'}`}>Season's Best</Link>
              <Link to="/about" className={`font-bold transition-all uppercase text-[10px] tracking-[0.3em] ${location.pathname === '/about' ? 'text-brand-gold' : 'text-brand-green hover:text-brand-gold'}`}>Our Story</Link>
              <Link to="/contact" className={`font-bold transition-all uppercase text-[10px] tracking-[0.3em] ${location.pathname === '/contact' ? 'text-brand-gold' : 'text-brand-green hover:text-brand-gold'}`}>Contact</Link>
              
              <div className="h-4 w-px bg-brand-gold/20 mx-2"></div>
              
              <Link to="/cart" className="relative p-2 text-brand-green hover:text-brand-gold transition-colors group">
                <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span className="absolute top-0 right-0 bg-brand-gold text-white text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold border border-white">0</span>
              </Link>
            </div>

            {/* Mobile buttons */}
            <div className="md:hidden flex items-center space-x-2">
              <Link to="/cart" className="relative p-2 text-brand-green">
                <ShoppingBag className="w-6 h-6" />
                <span className="absolute top-0 right-0 bg-brand-gold text-white text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold border border-white">0</span>
              </Link>
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-brand-green p-2 focus:outline-none z-[70]" 
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay - Full Screen Takeover */}
      <div 
        className={`fixed inset-0 z-[55] bg-white transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full px-8 space-y-10">
          <Link 
            to="/" 
            className={`text-3xl font-serif font-bold tracking-widest transition-colors ${
              location.pathname === '/' ? 'text-brand-gold' : 'text-brand-green'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={`text-3xl font-serif font-bold tracking-widest transition-colors ${
              location.pathname === '/products' ? 'text-brand-gold' : 'text-brand-green'
            }`}
          >
            Season's Best
          </Link>
          <Link 
            to="/about" 
            className={`text-3xl font-serif font-bold tracking-widest transition-colors ${
              location.pathname === '/about' ? 'text-brand-gold' : 'text-brand-green'
            }`}
          >
            Our Story
          </Link>
          <Link 
            to="/contact" 
            className={`text-3xl font-serif font-bold tracking-widest transition-colors ${
              location.pathname === '/contact' ? 'text-brand-gold' : 'text-brand-green'
            }`}
          >
            Contact
          </Link>

          <div className="pt-10 w-20 h-px bg-brand-gold/20"></div>
          
          <div className="flex space-x-8 pt-4">
             <div className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.3em]">Direct from APMC</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
