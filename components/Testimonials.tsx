import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Emily R.",
        role: "Small Business Owner",
        content: "I used to be terrified of the dentist. The team at Moses Lake Family Dentistry changed everything. The atmosphere is so calming, I actually fell asleep during my cleaning!",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3688&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Michael T.",
        role: "Architect",
        content: "Their attention to detail is unmatched. As an architect, I appreciate the aesthetics and precision they bring to their work. My veneers look incredibly natural.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3687&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Sarah L.",
        role: "Teacher",
        content: "State-of-the-art technology with a personal touch. Dr. Anderson took the time to explain every step of my treatment plan. Highly recommended.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3661&auto=format&fit=crop"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Patient Stories</h2>
                    <div className="w-24 h-1 bg-slate-900 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t) => (
                        <div key={t.id} className="bg-slate-50 p-8 rounded-sm relative group hover:-translate-y-2 transition-transform duration-300">
                            <Quote className="absolute top-8 right-8 w-8 h-8 text-slate-200 group-hover:text-blue-200 transition-colors" />
                            
                            <div className="flex items-center gap-4 mb-6">
                                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                                <div>
                                    <h4 className="font-serif font-bold text-slate-900">{t.name}</h4>
                                    <p className="text-xs text-slate-500 uppercase tracking-wide">{t.role}</p>
                                </div>
                            </div>
                            
                            <p className="text-slate-600 leading-relaxed italic">
                                "{t.content}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;