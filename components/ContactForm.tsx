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
    <section id="contact" className="py-20 bg-gradient-to-br from-brand-blue to-brand-dark border-t border-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/80 p-8 md:p-12 rounded-2xl border border-slate-700 shadow-2xl backdrop-blur-sm">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">Secure Your Consultation</h2>
            <p className="text-slate-400">
              Get a free preliminary assessment of your NIS2 status.
            </p>
          </div>

          {status === 'success' ? (
            <div className="text-center py-10 animate-fade-in-up">
              <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Request Received</h3>
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
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-brand-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-accent-cyan focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Work Email</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full bg-brand-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-accent-cyan focus:border-transparent outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">Company Name</label>
                <input 
                  type="text" 
                  id="company"
                  required
                  className="w-full bg-brand-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-accent-cyan focus:border-transparent outline-none transition-all"
                  placeholder="Acme Corp"
                />
              </div>

              <div>
                <label htmlFor="sector" className="block text-sm font-medium text-slate-300 mb-2">Industry Sector</label>
                <select 
                  id="sector"
                  className="w-full bg-brand-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-accent-cyan focus:border-transparent outline-none transition-all appearance-none"
                >
                  <option value="">Select a sector...</option>
                  <option value="energy">Energy</option>
                  <option value="transport">Transport</option>
                  <option value="banking">Banking</option>
                  <option value="health">Health</option>
                  <option value="digital">Digital Infrastructure</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message (Optional)</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-brand-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-accent-cyan focus:border-transparent outline-none transition-all"
                  placeholder="Tell us about your current compliance status..."
                ></textarea>
              </div>

              <Button 
                type="submit" 
                fullWidth 
                disabled={status === 'submitting'}
                className="text-lg py-4"
              >
                {status === 'submitting' ? 'Sending...' : 'Get Free Consultation'}
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