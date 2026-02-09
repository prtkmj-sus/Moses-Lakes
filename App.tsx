import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechnologySpotlight from './components/TechnologySpotlight';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-200 selection:text-slate-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TechnologySpotlight />
        <Testimonials />
        
        {/* Simple CTA Section before Footer */}
        <section className="py-20 bg-blue-600 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ready to Smile with Confidence?</h2>
                <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                    Schedule your comprehensive consultation today and discover what modern dentistry can do for you.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-white text-blue-900 px-8 py-4 font-bold rounded-sm shadow-xl hover:bg-blue-50 transition-colors">
                        Book Appointment Now
                    </button>
                    <button className="bg-transparent border-2 border-white text-white px-8 py-4 font-bold rounded-sm hover:bg-white/10 transition-colors">
                        Virtual Tour
                    </button>
                </div>
             </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;