import React from 'react';
import { AlertTriangle, Factory, Zap, Building2, Truck, Activity, Wifi } from 'lucide-react';

export const AboutNIS2: React.FC = () => {
  const essentialSectors = [
    { name: 'Energy', icon: <Zap size={20} /> },
    { name: 'Transport', icon: <Truck size={20} /> },
    { name: 'Banking', icon: <Building2 size={20} /> },
    { name: 'Health', icon: <Activity size={20} /> },
    { name: 'Digital Infra', icon: <Wifi size={20} /> },
    { name: 'Manufacturing', icon: <Factory size={20} /> },
  ];

  return (
    <section id="about" className="py-20 bg-brand-gray border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-impact uppercase text-white mb-4 tracking-wide">What is NIS2?</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            The Network and Information Systems Directive 2 (NIS2) is EU-wide legislation on cybersecurity. 
            It expands the scope of the previous directive, introducing stricter supervisory measures 
            and enforcement requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Key Changes */}
          <div className="space-y-8">
            <h3 className="text-3xl font-impact uppercase text-white tracking-wide">Why it matters</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-orange/10 flex items-center justify-center text-brand-orange border border-brand-orange/20 group-hover:bg-brand-orange group-hover:text-black transition-colors">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-impact uppercase text-white mb-1 tracking-wide">Personal Liability</h4>
                  <p className="text-slate-400">Top management can now be held personally liable for non-compliance with cybersecurity risk management measures.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-orange/10 flex items-center justify-center text-brand-orange border border-brand-orange/20 group-hover:bg-brand-orange group-hover:text-black transition-colors">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-impact uppercase text-white mb-1 tracking-wide">Heavier Fines</h4>
                  <p className="text-slate-400">Administrative fines of up to €10M or 2% of the total worldwide annual turnover for essential entities.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-orange/10 flex items-center justify-center text-brand-orange border border-brand-orange/20 group-hover:bg-brand-orange group-hover:text-black transition-colors">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-impact uppercase text-white mb-1 tracking-wide">Supply Chain Security</h4>
                  <p className="text-slate-400">Entities must address cybersecurity risks in their supply chains and supplier relationships.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sectors Grid */}
          <div className="bg-black p-8 rounded-sm border border-white/10" id="sectors">
            <h3 className="text-2xl font-impact uppercase text-white mb-6 tracking-wide">Affected Sectors</h3>
            <p className="text-slate-400 mb-6 text-sm">
              NIS2 distinguishes between "Essential" and "Important" entities. Is your sector on the list?
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {essentialSectors.map((sector) => (
                <div key={sector.name} className="flex items-center gap-3 p-3 bg-brand-gray rounded-sm border border-white/5 hover:border-brand-orange transition-colors">
                  <span className="text-brand-orange">{sector.icon}</span>
                  <span className="text-slate-200 font-bold uppercase text-sm tracking-wide">{sector.name}</span>
                </div>
              ))}
              <div className="col-span-2 p-3 bg-brand-gray rounded-sm border border-white/5 text-center text-sm text-slate-500 font-bold uppercase">
                + Waste Management, Space, Postal, Food...
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-sm text-slate-400 mb-2">Unsure if you qualify?</p>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView()} className="text-brand-orange font-bold uppercase tracking-wider hover:underline text-sm">
                Talk to an expert &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};