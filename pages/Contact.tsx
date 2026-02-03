
import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Get in Touch</h1>
            <p className="text-gray-600">Have questions about our harvest or bulk orders? We're here to help.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center">
              <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Call Us</h4>
              <p className="text-gray-500 text-sm">+91 74003 10443</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center">
              <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Email Us</h4>
              <p className="text-gray-500 text-sm">abhishek.gujar1202@gmail.com</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center">
              <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Visit Us</h4>
              <p className="text-gray-500 text-xs">N-1005, APMC, Fruit Market, Turbhe, Navi-Mumbai-4000705</p>
            </div>
          </div>

          <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 bg-brand-green text-white">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <p className="text-white/80 mb-8 leading-relaxed">
                  For bulk orders, wholesale inquiries, or just to say hi, use the form. We usually respond within 2-4 hours during business days.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-brand-gold" />
                    </div>
                    <span>Direct Chat Available</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <Send className="w-5 h-5 text-brand-gold" />
                    </div>
                    <span>Pan-India Shipping</span>
                  </div>
                </div>
              </div>
              
              <div className="p-12">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold"
                      placeholder="Bulk Order Inquiry"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button className="w-full py-4 bg-brand-gold text-white rounded-xl font-bold hover:bg-brand-green transition-all shadow-lg shadow-brand-gold/20 uppercase tracking-widest text-[9px]">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
