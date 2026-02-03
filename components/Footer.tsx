
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=N-1005+APMC+Fruit+Market+Turbhe+Navi+Mumbai+400705";

  return (
    <footer className="bg-brand-green text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-6 transition-transform hover:scale-105">
              <Logo size="lg" className="items-start" />
            </Link>
            <p className="text-white/50 leading-relaxed mb-8 text-xs font-medium max-w-xs">
              Curating the world's most exquisite seasonal harvests from our heritage orchards. Delivering premium quality globally from our Turbhe APMC station.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/dbnfruits" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white group-hover:text-brand-green" />
              </a>
              <a 
                href="https://facebook.com/dbnfruits" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all group"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-white group-hover:text-brand-green" />
              </a>
              <a 
                href="https://twitter.com/dbnfruits" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all group"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-white group-hover:text-brand-green" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-brand-gold text-[9px] font-bold uppercase tracking-[0.3em] mb-8">Discovery</h4>
            <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-white/60">
              <li><Link to="/products" className="hover:text-brand-gold transition-colors">The Harvest</Link></li>
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">Our Legacy</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Inquiry</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Wholesale</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold text-[9px] font-bold uppercase tracking-[0.3em] mb-8">Assurance</h4>
            <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-white/60">
              <li><Link to="/about#quality" className="hover:text-brand-gold transition-colors">Quality Grade</Link></li>
              <li><Link to="/about#shipping" className="hover:text-brand-gold transition-colors">Export Terms</Link></li>
              <li><Link to="/about#privacy" className="hover:text-brand-gold transition-colors">Data Privacy</Link></li>
              <li><Link to="/about#returns" className="hover:text-brand-gold transition-colors">Returns</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold text-[9px] font-bold uppercase tracking-[0.3em] mb-8">Contact</h4>
            <ul className="space-y-5 text-white/70">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <a 
                  href={googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs font-medium hover:text-brand-gold transition-colors"
                >
                  N-1005, APMC, Fruit Market,<br/>Turbhe, Navi-Mumbai-4000705
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="tel:+917400310443" className="text-xs font-medium hover:text-brand-gold transition-colors">
                  +91 74003 10443
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="mailto:abhishek.gujar1202@gmail.com" className="text-xs font-medium hover:text-brand-gold transition-colors">
                  abhishek.gujar1202@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-white/30 text-[9px] font-bold tracking-[0.2em] uppercase gap-4">
          <p>&copy; {new Date().getFullYear()} DBN Fruits Luxury Export. All Rights Reserved.</p>
          <div className="flex items-center gap-2">
            <span>Crafted by</span>
            <a 
              href="https://dbn.engineering" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-gold hover:text-white transition-colors"
            >
              DBN Engineering
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
