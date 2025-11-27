import React, { useState } from 'react';
import { Button } from './Button';
import { Check } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-brand-gray to-black border-t border-white/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/50 p-8 md:p-12 rounded-sm border border-white/10 shadow-2xl backdrop-blur-sm">
          
          <div className="text-center mb-10">
            <h2 className="text-4xl font-impact uppercase tracking-wide text-white mb-2">Secure Your Consultation</h2>
            <p className="text-slate-400">
              Get a free preliminary assessment of your NIS2 status.
            </p>
          </div>

          {status === 'success' ? (
            <div className="text-center py-10 animate-fade-in-up">
              <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={32} />
              </div>
              <h3 className="text-3xl font-impact uppercase text-white mb-2">Request Received</h3>
              <p className="text-slate-400">
                Our security experts will review your details and contact you within 24 hours.
              </p>
              <Button 
                variant="outline" 
                className="mt-8"
                onClick={() => setStatus('idle')}
              >
                Send Another Request
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold uppercase text-slate-300 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-brand-gray border border-white/10 rounded-sm px-4 py-3 text-white focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all placeholder-slate-600"
                    placeholder="JOHN DOE"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold uppercase text-slate-300 mb-2">Work Email</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full bg-brand-gray border border-white/10 rounded-sm px-4 py-3 text-white focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all placeholder-slate-600"
                    placeholder="JOHN@COMPANY.COM"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-bold uppercase text-slate-300 mb-2">Company Name</label>
                <input 
                  type="text" 
                  id="company"
                  required
                  className="w-full bg-brand-gray border border-white/10 rounded-sm px-4 py-3 text-white focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all placeholder-slate-600"
                  placeholder="ACME CORP"
                />
              </div>

              <div>
                <label htmlFor="sector" className="block text-sm font-bold uppercase text-slate-300 mb-2">Industry Sector</label>
                <select 
                  id="sector"
                  className="w-full bg-brand-gray border border-white/10 rounded-sm px-4 py-3 text-white focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all appearance-none"
                >
                  <option value="">SELECT A SECTOR...</option>
                  <option value="energy">ENERGY</option>
                  <option value="transport">TRANSPORT</option>
                  <option value="banking">BANKING</option>
                  <option value="health">HEALTH</option>
                  <option value="digital">DIGITAL INFRASTRUCTURE</option>
                  <option value="manufacturing">MANUFACTURING</option>
                  <option value="other">OTHER</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold uppercase text-slate-300 mb-2">Message (Optional)</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-brand-gray border border-white/10 rounded-sm px-4 py-3 text-white focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all placeholder-slate-600"
                  placeholder="Tell us about your current compliance status..."
                ></textarea>
              </div>

              <Button 
                type="submit" 
                fullWidth 
                disabled={status === 'submitting'}
                className="text-xl py-4"
              >
                {status === 'submitting' ? 'SENDING...' : 'GET FREE CONSULTATION'}
              </Button>
              
              <p className="text-xs text-center text-slate-500 mt-4">
                By submitting this form, you agree to our Privacy Policy. Your data is secure.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};