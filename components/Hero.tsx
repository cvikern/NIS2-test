import React from 'react';
import { ArrowRight, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-900/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-5 bg-cover bg-center mix-blend-overlay grayscale"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-sm font-bold uppercase tracking-wider mb-6">
              <ShieldAlert size={14} />
              <span>Deadline Passed - Act Now</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-impact uppercase tracking-tight text-white mb-6 leading-none">
              Master <span className="text-brand-orange">NIS2 Compliance</span> Before It's Too Late
            </h1>
            
            <p className="text-lg text-slate-400 mb-8 leading-relaxed font-sans">
              The EU's new cybersecurity directive imposes strict requirements and heavy penalties. 
              Our specialized consultancy ensures your organization is compliant, secure, and resilient.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button className="group">
                  Free Gap Analysis
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#about">
                <Button variant="secondary">
                  Learn About NIS2
                </Button>
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500 font-bold uppercase tracking-wide">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-orange w-4 h-4" />
                <span>Legal Expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-orange w-4 h-4" />
                <span>Technical Audits</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-orange w-4 h-4" />
                <span>ISO 27001 Aligned</span>
              </div>
            </div>
          </div>

          {/* Abstract Visual / Dashboard Mockup */}
          <div className="hidden lg:block relative mt-12 lg:mt-0">
            <div className="relative rounded-sm bg-brand-gray border border-white/10 p-2 shadow-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-red-600 rounded-sm blur opacity-20"></div>
              <div className="relative rounded-sm overflow-hidden bg-black grayscale contrast-125">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                  alt="Cybersecurity Dashboard" 
                  className="w-full h-auto opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-zinc-900/90 backdrop-blur-md p-4 rounded-sm border border-white/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold uppercase tracking-wider text-slate-300">Compliance Status</span>
                    <span className="text-xs font-bold text-black bg-brand-orange px-2 py-0.5 rounded-sm uppercase">Action Required</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-2 rounded-none overflow-hidden">
                    <div className="bg-brand-orange w-[65%] h-full"></div>
                  </div>
                  <div className="mt-2 text-xs text-slate-400 flex justify-between font-mono">
                    <span>SCORE: 65/100</span>
                    <span className="text-brand-orange hover:underline cursor-pointer uppercase">View Report &rarr;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};