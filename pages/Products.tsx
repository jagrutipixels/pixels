
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FRUITS } from '../constants';
import { Search } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Mango' | 'Apple' | 'Grapes'>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredFruits = FRUITS.filter(fruit => {
    const matchesTab = activeTab === 'All' || fruit.category === activeTab;
    const matchesSearch = 
      fruit.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      fruit.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".products-header", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1
      });

      // gsap.context automatically handles the cleanup of all ScrollTriggers created within it.
      // We removed the manual ID-based cleanup and the 'id' property from ScrollTrigger.batch
      // as 'id' is not a valid property for BatchVars.
      ScrollTrigger.batch(".product-card", {
        onEnter: (elements) => {
          gsap.from(elements, {
            autoAlpha: 0,
            y: 50,
            scale: 0.95,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
            overwrite: true
          });
        },
        start: "top 95%"
      });
    }, containerRef);

    return () => ctx.revert();
  }, [activeTab, searchTerm]);

  return (
    <div ref={containerRef} className="pt-32 pb-20 min-h-screen bg-[#fffdf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="products-header text-brand-gold font-bold tracking-[0.2em] text-[8px] uppercase block mb-3">Seasonal Discovery</span>
          <h1 className="products-header text-3xl md:text-5xl font-serif font-bold text-brand-green mb-3">The Harvest Collection</h1>
          <p className="products-header text-gray-500 max-w-md mx-auto text-xs font-medium leading-relaxed uppercase tracking-widest">Hand-selected, export-graded fruits direct from our APMC hub.</p>
        </div>

        {/* Filters and Search - Styled to match screenshot */}
        <div className="products-header flex flex-col items-center gap-6 mb-16">
          <div className="flex p-1 bg-white rounded-2xl border border-brand-gold/10 shadow-sm overflow-x-auto whitespace-nowrap max-w-full">
            {(['All', 'Mango', 'Apple', 'Grapes'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-xl text-[9px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-brand-green text-brand-gold shadow-lg shadow-brand-green/20' 
                    : 'text-brand-green/30 hover:text-brand-green'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative group w-full max-w-2xl px-4 md:px-0">
            <Search className="absolute left-8 md:left-6 top-1/2 -translate-y-1/2 text-brand-gold/50 w-4 h-4" />
            <input
              type="text"
              placeholder="Search our heritage orchards..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-8 py-5 bg-white border border-brand-gold/10 rounded-2xl focus:outline-none focus:ring-1 focus:ring-brand-gold shadow-sm text-sm font-medium transition-all focus:shadow-md"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredFruits.length > 0 ? (
            filteredFruits.map((fruit) => (
              <div key={fruit.id} className="product-card group bg-white rounded-[32px] overflow-hidden border border-brand-gold/5 luxury-shadow hover:border-brand-gold/20 transition-all duration-700">
                <Link to={`/product/${fruit.id}`} className="block relative aspect-square overflow-hidden">
                  <img 
                    src={fruit.image} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                    alt={fruit.name} 
                  />
                  <div className="absolute top-5 right-5">
                    <div className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[8px] font-bold uppercase tracking-widest text-brand-green border border-brand-gold/10 shadow-sm">
                      {fruit.category}
                    </div>
                  </div>
                </Link>
                
                <div className="p-8 text-center">
                  <div className="mb-5">
                    <Link to={`/product/${fruit.id}`} className="text-xl font-serif font-bold text-brand-green group-hover:text-brand-gold transition-colors block mb-1.5">
                      {fruit.name}
                    </Link>
                    <p className="text-[9px] text-brand-green/40 uppercase tracking-[0.15em] font-bold">{fruit.scientificName}</p>
                  </div>
                  
                  <div className="pt-6 border-t border-brand-gold/5 flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-brand-green font-serif">₹{fruit.price}</span>
                      <span className="text-gray-400 text-[10px] ml-1.5">/ {fruit.unit}</span>
                    </div>
                    <Link 
                      to={`/product/${fruit.id}`} 
                      className="px-6 py-2.5 bg-brand-gold text-white rounded-xl font-bold uppercase tracking-[0.1em] text-[9px] hover:bg-brand-green transition-all shadow-md"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-gray-400 font-serif italic text-lg">No fruits found in this harvest season.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
