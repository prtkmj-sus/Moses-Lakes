import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-white">
                <span className="font-serif font-bold text-lg text-white">M</span>
                </div>
                <span className="font-serif font-bold text-xl tracking-tight text-white">
                    Moses Lake <span className="font-light">Dentistry</span>
                </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Elevating dental care through technology, compassion, and artistic precision. Your smile is our masterpiece.
            </p>
            <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                    <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-400 transition-colors">
                    <Twitter className="w-4 h-4" />
                </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-400">
                {['Home', 'Our Team', 'Services', 'Technology', 'Patient Portal', 'Privacy Policy'].map(link => (
                    <li key={link}>
                        <a href="#" className="hover:text-white transition-colors">{link}</a>
                    </li>
                ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>123 Lakeview Blvd, Suite 100<br/>Moses Lake, WA 98837</span>
                </li>
                <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>(509) 555-0123</span>
                </li>
                <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>hello@moseslakedentistry.com</span>
                </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Office Hours</h4>
            <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex justify-between">
                    <span>Mon - Thu</span>
                    <span className="text-white">8:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                    <span>Friday</span>
                    <span className="text-white">8:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                    <span>Sat - Sun</span>
                    <span className="text-slate-600">Closed</span>
                </li>
            </ul>
            <div className="mt-6">
                <Button variant="white" className="w-full py-2 text-xs">Book Online</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-xs">
                © {new Date().getFullYear()} Moses Lake Family Dentistry. All rights reserved.
            </p>
            
            {/* Disclaimer for Figma Request */}
            <div className="flex items-center gap-2">
                 <span className="text-slate-600 text-xs italic">Concept by AI Designer</span>
                 <button className="text-[10px] bg-slate-800 text-slate-400 px-2 py-1 rounded hover:text-white transition-colors" title="This is a code prototype">
                    Download Code
                 </button>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;