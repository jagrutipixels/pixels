
import React, { useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, ShoppingBag, Package, Users, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FRUITS } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from '../components/Logo';

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "DBN Alphonso | Buy Authentic Ratnagiri & Devgad Hapus Online";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Direct from Vashi APMC. 100% Carbide-free, naturally ripened Alphonso mangoes. Lock your 2026 pre-order today!");
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(heroImageRef.current, 
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.5, ease: "expo.out" }
      )
      .from(".hero-text", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: "power4.out",
      }, "-=2");

      const sections = gsap.utils.toArray('section');
      sections.forEach((section: any) => {
        gsap.from(section.querySelectorAll('.reveal-on-scroll-header'), {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });

      ScrollTrigger.batch(".reveal-item", {
        onEnter: (elements) => {
          gsap.from(elements, {
            autoAlpha: 0,
            y: 50,
            stagger: 0.15,
            duration: 1.2,
            ease: "power3.out",
            overwrite: true
          });
        },
        start: "top 85%"
      });

      ScrollTrigger.batch(".feature-card", {
        onEnter: (elements) => {
          gsap.from(elements, {
            scale: 0.9,
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.8,
            ease: "back.out(1.7)",
            overwrite: true
          });
        },
        start: "top 90%"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const mangoes = FRUITS.filter(f => f.category === 'Mango');

  return (
    <div ref={containerRef} className="overflow-hidden bg-[#fffdf9]">
      {/* Increased PT to ensure mobile content starts below the fixed navbar */}
      <section className="relative min-h-[90vh] flex items-center pt-20 lg:pt-32">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div ref={heroImageRef} className="w-full h-full relative">
            <img 
              src="https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&q=80&w=1920" 
              className="w-full h-full object-cover grayscale-[0.05]" 
              alt="Mangoes at Vashi" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="max-w-4xl flex flex-col items-start">
            <span className="hero-text inline-block px-3 py-1 rounded-full bg-brand-green text-brand-gold font-bold text-[8px] mb-5 uppercase tracking-[0.3em] shadow-lg border border-brand-gold/10">
              Turbhe APMC Direct Export
            </span>
            
            <h1 className="hero-text text-4xl md:text-6xl font-serif font-bold text-brand-green mb-5 leading-tight">
              The Gold Standard <br/>
              of Alphonso.
            </h1>
            
            <p className="hero-text text-base text-gray-700 mb-8 leading-relaxed max-w-lg font-medium">
              We are the first hands to touch the harvest. 100% Carbide-free, legacy ripened, and export-graded for your home.
            </p>
            
            <div className="hero-text flex flex-wrap gap-5">
              <Link 
                to="/products" 
                className="px-8 py-3.5 bg-brand-green text-white rounded-full font-bold hover:bg-brand-green/90 transition-all shadow-lg flex items-center group text-[9px] uppercase tracking-widest"
              >
                Pre-order 2026 Harvest <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-brand-gold" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core USPs */}
      <section className="py-16 bg-white border-y border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Zero Carbide", desc: "Naturally ripened in traditional hay boxes for 100% safety.", icon: ShieldCheck },
              { title: "GI Tagged", desc: "100% Traceable to authentic orchards of the Konkan coast.", icon: Award },
              { title: "Expert Graded", desc: "Inspected by multi-generational specialists at our Turbhe Gala.", icon: Zap }
            ].map((usp) => (
              <div key={usp.title} className="reveal-item flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center shrink-0">
                  <usp.icon className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-brand-green mb-0.5 uppercase tracking-wider">{usp.title}</h4>
                  <p className="text-gray-500 text-[10px] leading-relaxed">{usp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Highlights */}
      <section className="py-20 bg-[#fffdf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal-on-scroll-header">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-green mb-3">Premium Quality Grade A1+</h2>
            <p className="text-gray-500 text-xs max-w-lg mx-auto uppercase tracking-widest">The elite selection from the Turbhe Wholesale Market.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mangoes.slice(0, 4).map((mango) => (
              <div key={mango.id} className="reveal-item group bg-white rounded-3xl p-5 md:p-6 luxury-shadow flex flex-col md:flex-row items-center border border-brand-gold/10 hover:border-brand-gold/20 transition-all duration-500 gap-6">
                <div className="w-full md:w-1/2 aspect-square overflow-hidden rounded-2xl shadow-sm">
                  <img src={mango.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={mango.name} />
                </div>
                <div className="w-full md:w-1/2">
                   <span className="text-[8px] font-bold text-brand-gold uppercase tracking-[0.2em] block mb-1.5">Export Graded</span>
                   <h3 className="text-lg md:text-xl font-bold text-brand-green mb-2 font-serif leading-tight">{mango.name}</h3>
                   <p className="text-gray-500 mb-5 text-[11px] leading-relaxed line-clamp-2">{mango.description}</p>
                   <div className="flex items-center justify-between">
                     <span className="text-base font-bold text-brand-green font-serif">₹{mango.price}<span className="text-[8px] text-gray-400 font-normal">/{mango.unit}</span></span>
                     <Link to={`/product/${mango.id}`} className="px-4 py-2 bg-brand-gold text-white rounded-md hover:bg-brand-green transition-all shadow-sm font-bold uppercase tracking-widest text-[8px]">
                       View Harvest
                     </Link>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk & Corporate Section */}
      <section className="py-20 bg-brand-green relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-on-scroll-header">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-5 leading-tight">Wholesale Direct <br/>to Your Society.</h2>
              <p className="text-white/80 mb-8 text-sm leading-relaxed max-w-md">
                Why pay retail for luxury? We provide bulk crates at market rates for housing societies in Mumbai & Navi Mumbai.
              </p>
              <div className="space-y-4">
                <div className="feature-card flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center border border-white/20">
                    <Users className="w-4 h-4 text-brand-gold" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Society Bulk (20+ Crates)</span>
                </div>
                <div className="feature-card flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center border border-white/20">
                    <Package className="w-4 h-4 text-brand-gold" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Corporate Gifting</span>
                </div>
              </div>
            </div>
            <div className="reveal-item bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-xl font-bold mb-3 text-brand-green font-serif">Pre-Order Price Lock</h3>
              <p className="text-gray-500 mb-6 text-[11px] leading-relaxed">Secure your 2026 harvest pricing today. We guarantee the first arrivals of the season from the Ratnagiri belt.</p>
              <Link to="/contact" className="block w-full py-3.5 bg-brand-gold text-white text-center rounded-xl font-bold hover:bg-brand-green transition-all uppercase tracking-[0.2em] text-[9px] shadow-md">
                Contact Our Gala
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
