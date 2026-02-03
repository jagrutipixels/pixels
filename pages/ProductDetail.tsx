
import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FRUITS } from '../constants';
import { ArrowLeft, ShoppingBag, Star, ShieldCheck, Heart, Truck, Plus, Minus } from 'lucide-react';
import gsap from 'gsap';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const fruit = FRUITS.find(f => f.id === id);

  useEffect(() => {
    if (!fruit) {
      navigate('/products');
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".detail-animate", {
        y: 30,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out"
      });

      gsap.from(imageRef.current, {
        scale: 1.05,
        opacity: 0,
        duration: 2,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, [id, fruit, navigate]);

  if (!fruit) return null;

  return (
    <div ref={containerRef} className="pt-24 lg:pt-32 min-h-screen bg-[#fffdf9]">
      {/* Top Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <Link 
          to="/products" 
          className="inline-flex items-center text-brand-green/60 hover:text-brand-gold transition-colors font-bold uppercase text-[9px] tracking-widest group"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Selection
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left: Image Section */}
          <div className="relative lg:sticky lg:top-40 order-1">
            <div 
              className="absolute -top-10 -left-10 w-[110%] h-[110%] blur-[100px] opacity-[0.06] pointer-events-none rounded-full" 
              style={{ backgroundColor: fruit.color }}
            ></div>
            <div 
              ref={imageRef}
              className="relative aspect-square rounded-[32px] lg:rounded-[40px] overflow-hidden luxury-shadow border-[6px] lg:border-[8px] border-white z-10"
            >
              <img 
                src={fruit.image} 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
                alt={fruit.name} 
              />
              <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                <span className="px-4 py-1.5 lg:px-6 lg:py-2 bg-brand-green/90 backdrop-blur-md rounded-full text-[8px] lg:text-[9px] font-bold text-brand-gold shadow-lg uppercase tracking-[0.2em] border border-brand-gold/20">
                  {fruit.season}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Content Section */}
          <div className="flex flex-col order-2">
            <div className="mb-3 detail-animate">
                <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-[9px]">
                    Legacy Harvest Quality
                </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-brand-green mb-4 detail-animate leading-tight">
              {fruit.name}
            </h1>
            <p className="text-base lg:text-lg text-brand-green/40 italic mb-6 lg:mb-8 detail-animate font-serif">
              {fruit.scientificName}
            </p>

            <div className="flex items-center space-x-4 mb-8 lg:mb-10 detail-animate">
                <div className="flex text-brand-gold">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 lg:w-4 lg:h-4 fill-current" />)}
                </div>
                <span className="text-gray-400 font-bold uppercase text-[8px] lg:text-[9px] tracking-widest">Global Export Grade A</span>
            </div>

            <div className="detail-animate mb-8 lg:mb-10">
              <h3 className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.1em] mb-3">Orchard Bio</h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                {fruit.description} Our {fruit.name.toLowerCase()} curation represents the pinnacle of seasonal freshness, intended for those who appreciate the finer nuances of organic fruit.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mb-10 lg:mb-12 detail-animate">
              {fruit.benefits.map((benefit, i) => (
                <div key={i} className="p-4 bg-white rounded-2xl border border-brand-gold/10 hover:border-brand-gold/20 hover:shadow-lg transition-all group flex sm:flex-col items-center sm:items-start gap-4 sm:gap-0">
                  <div className="w-10 h-10 bg-brand-gold/5 rounded-xl flex items-center justify-center sm:mb-3 group-hover:bg-brand-gold transition-colors duration-500 shrink-0">
                    <Heart className="w-4 h-4 lg:w-5 lg:h-5 text-brand-gold group-hover:text-white" />
                  </div>
                  <span className="text-[9px] font-bold text-brand-green uppercase tracking-wider">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Pricing & Cart */}
            <div className="bg-brand-green p-6 lg:p-8 rounded-[32px] lg:rounded-[40px] border border-brand-gold/10 detail-animate shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-6 mb-6 lg:mb-8">
                <div>
                  <p className="text-[9px] text-brand-gold font-bold uppercase tracking-[0.2em] mb-1">Premium Valuation</p>
                  <div className="flex items-baseline">
                    <span className="text-3xl lg:text-4xl font-bold text-white font-serif">₹{fruit.price}</span>
                    <span className="text-white/40 ml-2.5 text-xs">/ {fruit.unit}</span>
                  </div>
                </div>

                <div className="flex items-center bg-white/5 rounded-xl p-1.5 border border-white/10">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="p-2.5 hover:bg-white/10 rounded-lg transition-colors text-brand-gold"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 lg:w-10 text-center font-bold text-lg text-white">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="p-2.5 hover:bg-white/10 rounded-lg transition-colors text-brand-gold"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button className="w-full py-4 lg:py-5 bg-brand-gold text-white rounded-2xl lg:rounded-xl font-bold text-[10px] lg:text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-brand-green transition-all shadow-lg flex items-center justify-center group">
                <ShoppingBag className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                Reserve Now • ₹{fruit.price * quantity}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mt-8 lg:mt-10 detail-animate">
              <div className="flex items-center text-[9px] text-brand-green/40 font-bold uppercase tracking-widest">
                <Truck className="w-3.5 h-3.5 text-brand-gold mr-2.5" /> Priority Air Freight
              </div>
              <div className="flex items-center text-[9px] text-brand-green/40 font-bold uppercase tracking-widest">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-gold mr-2.5" /> Export Certified
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
