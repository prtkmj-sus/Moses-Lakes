import React from 'react';
import { Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-32 -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-50 rounded-full -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=3774&auto=format&fit=crop" 
              alt="Modern Dental Office Interior" 
              className="rounded-sm shadow-2xl w-full object-cover h-[600px]"
            />
            <div className="absolute bottom-12 -right-6 bg-white p-8 shadow-xl max-w-xs border-l-4 border-slate-900 hidden md:block">
                <div className="flex gap-1 mb-4 text-yellow-500">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="font-serif text-lg italic text-slate-800 mb-4">
                    "The most professional and comfortable dental experience I've ever had."
                </p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">— Sarah Jenkins, Patient</p>
            </div>
          </div>

          <div>
            <span className="text-blue-600 font-semibold tracking-widest text-xs uppercase mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
              Dentistry that <br/>
              <span className="italic font-light text-slate-500">Respects</span> Your Lifestyle
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              At Moses Lake Family Dentistry, we believe that visiting the dentist should be an experience you look forward to. We've reimagined the traditional dental office to create a sanctuary of health and wellness.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              From our minimal-wait policy to our noise-canceling headphones and ceiling-mounted entertainment, every detail is curated for your comfort.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                    <h4 className="text-3xl font-serif font-bold text-slate-900 mb-2">15+</h4>
                    <p className="text-sm text-slate-500">Years Serving Moses Lake</p>
                </div>
                <div>
                    <h4 className="text-3xl font-serif font-bold text-slate-900 mb-2">5k+</h4>
                    <p className="text-sm text-slate-500">Happy Smiles Created</p>
                </div>
            </div>

            <a href="#about-more" className="inline-flex items-center text-slate-900 font-semibold hover:text-blue-600 transition-colors group">
              Meet Dr. Anderson
              <span className="ml-2 w-8 h-[1px] bg-slate-900 group-hover:bg-blue-600 transition-colors"></span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;