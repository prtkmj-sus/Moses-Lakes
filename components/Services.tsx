import React from 'react';
import { Sparkles, Scan, Heart, Activity } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, whitening, and aesthetic bonding designed for natural beauty.",
    icon: <Sparkles className="w-8 h-8" />
  },
  {
    title: "Restorative Care",
    description: "Advanced implants, crowns, and bridges that restore function and look indistinguishable from natural teeth.",
    icon: <Activity className="w-8 h-8" />
  },
  {
    title: "Preventative Hygiene",
    description: "Comprehensive cleaning and early detection protocols to maintain lifelong oral health.",
    icon: <Heart className="w-8 h-8" />
  },
  {
    title: "3D Imaging & Diagnostics",
    description: "Precision diagnostics using CBCT scanning for accurate treatment planning.",
    icon: <Scan className="w-8 h-8" />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-600 font-semibold tracking-widest text-xs uppercase mb-3 block">Comprehensive Care</span>
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Curated Services for Every Smile</h2>
            <p className="text-slate-600">
                We combine artistry with medical precision to deliver results that enhance both your health and your confidence.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100">
                    <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                        {service.icon}
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.description}</p>
                    <a href="#" className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 transition-colors flex items-center">
                        Learn More <span className="ml-2 text-lg">›</span>
                    </a>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;