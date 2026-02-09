import React from 'react';
import Button from './Button';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-900">
      {/* Background Video Placeholder - Using a high quality image that looks like a still */}
      <div className="absolute inset-0">
        <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=3868&auto=format&fit=crop" 
            alt="Dental office background" 
            className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
        
        {/* Abstract animated overlay lines to suggest "Tech" */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs tracking-wider mb-8 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              ACCEPTING NEW PATIENTS
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6 tracking-tight">
              Redefining <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Dental Excellence</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 font-light leading-relaxed max-w-lg">
              Experience the perfect synergy of luxury comfort and advanced precision technology right here in Moses Lake.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button variant="white" className="w-full sm:w-auto min-w-[200px]">
                Book Appointment
              </Button>
              <button className="group flex items-center justify-center gap-3 px-8 py-4 text-white hover:text-blue-200 transition-colors">
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-blue-200 group-hover:bg-white/10 transition-all">
                    <Play className="w-4 h-4 ml-1 fill-current" />
                </div>
                <span className="text-sm font-medium tracking-wide">Watch Our Story</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ArrowRight className="w-4 h-4 rotate-90" />
      </div>
    </div>
  );
};

export default Hero;