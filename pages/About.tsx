
import React, { useEffect } from 'react';
import { Package, Truck, ShieldCheck, Award } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const About: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    // SEO Management
    document.title = "The DBN Legacy | From Turbhe APMC to Your Doorstep";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Discover how DBN brings generations of fruit expertise from the Turbhe APMC market directly to your home with zero middlemen.");
    }

    // Handle internal hash scrolling
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1920" 
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.3]" 
          alt="APMC Fruit Market" 
        />
        <div className="absolute inset-0 bg-brand-green/70 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center text-white px-4">
          <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-[9px] block mb-4">Our Legacy</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">The DBN Heritage</h1>
          <p className="text-base max-w-xl mx-auto text-white/80 leading-relaxed font-light">
            From our central hub at Turbhe APMC Fruit Market to your doorstep. Expertise passed down through generations of fruit merchants.
          </p>
        </div>
      </section>

      {/* The Strategy Content */}
      <section id="quality" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-brand-green mb-6">Rooted in the Heart of the Fruit Trade.</h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                The Turbhe APMC Fruit Market is the heartbeat of India's fruit commerce, and DBN is at its core. Operating from our hub at N-1005, we witness the season's first arrivals before they reach any shelf.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                Our direct presence allows us to bypass middlemen and chemical ripening processes. When you order from DBN, you tap into a supply chain that is shorter, fresher, and more honest.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col space-y-1">
                  <span className="text-xl font-bold text-brand-gold font-serif">100%</span>
                  <span className="text-[9px] uppercase tracking-widest text-brand-green font-bold">Traceable to Konkan</span>
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-xl font-bold text-brand-gold font-serif">A1+</span>
                  <span className="text-[9px] uppercase tracking-widest text-brand-green font-bold">Export Grade</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-10 rounded-[40px] border border-brand-gold/10">
              <h3 className="text-sm font-bold text-brand-green mb-6 uppercase tracking-widest">Our Promise</h3>
              <ul className="space-y-5">
                <li className="flex items-start space-x-4">
                  <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm"><strong>Zero Carbide:</strong> Naturally ripened in traditional hay boxes.</span>
                </li>
                <li className="flex items-start space-x-4">
                  <Truck className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm"><strong>Direct Dispatch:</strong> Orders before 11 AM leave our Turbhe facility same day.</span>
                </li>
                <li className="flex items-start space-x-4">
                  <Package className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm"><strong>Premium Packaging:</strong> Damage-proof, export-grade corrugated boxes.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-20 bg-[#fffdf9] border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div id="shipping">
              <h4 className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] mb-4">Shipping Policy & Export Terms</h4>
              <ul className="text-xs text-gray-500 space-y-2.5">
                <li>• Zones: Mumbai, Navi Mumbai, Thane (Same-day/Next-day).</li>
                <li>• Dispatch: Orders before 11 AM leave Turbhe APMC same day.</li>
                <li>• Logistics: Handled by expert fruit delivery partners.</li>
              </ul>
            </div>
            <div id="returns">
              <h4 className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] mb-4">Refund & Quality Guarantee</h4>
              <ul className="text-xs text-gray-500 space-y-2.5">
                <li>• 24-Hour Guarantee: Report damage with unboxing video within 24h.</li>
                <li>• Resolution: Verifiable damage leads to free replacement.</li>
                <li>• Variation: Slight size variations are natural for organic harvest.</li>
              </ul>
            </div>
            <div id="privacy" className="md:col-span-2 pt-8 border-t border-brand-gold/5">
              <h4 className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] mb-4">Data Privacy</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Your privacy is paramount. At DBN Fruits, we only collect information necessary to fulfill your premium harvest orders. We never share your personal data with third-party marketers. All transactions are encrypted and processed through secure banking partners.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
