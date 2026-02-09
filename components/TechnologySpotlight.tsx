import React from 'react';
import { TechItem } from '../types';

const techItems: TechItem[] = [
    {
        title: "CEREC® Primescan",
        description: "Digital impressions in seconds. No goop, no gagging. Just precise 3D models of your teeth.",
        image: "https://images.unsplash.com/photo-1516069677864-92748b511cd6?q=80&w=3560&auto=format&fit=crop"
    },
    {
        title: "CBCT 3D Imaging",
        description: "Low-radiation panoramic scanning allows us to see beneath the surface for safer implant placement.",
        image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=3732&auto=format&fit=crop"
    },
    {
        title: "Laser Dentistry",
        description: "Minimally invasive soft tissue treatments with faster healing times and less discomfort.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=3880&auto=format&fit=crop"
    }
];

const TechnologySpotlight: React.FC = () => {
    const [activeTech, setActiveTech] = React.useState(0);

    return (
        <section id="technology" className="py-24 bg-slate-900 text-white overflow-hidden relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    
                    {/* Left Side: Content & Navigation */}
                    <div className="lg:w-1/2">
                        <div className="mb-12">
                            <span className="text-blue-400 font-semibold tracking-widest text-xs uppercase mb-3 block">Future of Care</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Technology Spotlight</h2>
                            <p className="text-slate-400 text-lg">
                                We invest in the latest dental innovations to ensure your treatment is safer, faster, and more effective.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {techItems.map((item, index) => (
                                <div 
                                    key={index}
                                    onClick={() => setActiveTech(index)}
                                    className={`cursor-pointer p-6 border-l-2 transition-all duration-300 ${
                                        activeTech === index 
                                        ? 'border-blue-400 bg-white/5' 
                                        : 'border-slate-700 hover:bg-white/5 hover:border-slate-500'
                                    }`}
                                >
                                    <h3 className={`text-xl font-serif font-medium mb-2 ${activeTech === index ? 'text-white' : 'text-slate-400'}`}>
                                        {item.title}
                                    </h3>
                                    <div className={`overflow-hidden transition-all duration-500 ${activeTech === index ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Visuals */}
                    <div className="lg:w-1/2 relative h-[500px] w-full">
                        {techItems.map((item, index) => (
                            <div 
                                key={index}
                                className={`absolute inset-0 transition-all duration-700 transform ${
                                    activeTech === index 
                                    ? 'opacity-100 translate-x-0 scale-100' 
                                    : 'opacity-0 translate-x-10 scale-95 pointer-events-none'
                                }`}
                            >
                                <div className="relative h-full w-full rounded-sm overflow-hidden shadow-2xl border border-slate-700">
                                    <div className="absolute inset-0 bg-slate-900/20 z-10"></div>
                                    <img 
                                        src={item.image} 
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Tech Overlay Graphic Mockup */}
                                    <div className="absolute bottom-6 left-6 z-20">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/80 backdrop-blur-md rounded-full text-xs font-mono text-blue-300 border border-blue-500/30">
                                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                                            SYSTEM ACTIVE
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TechnologySpotlight;