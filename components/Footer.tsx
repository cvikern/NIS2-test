import React from 'react';
import { ShieldCheck, Twitter, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="text-accent-cyan w-6 h-6" />
              <span className="text-xl font-bold tracking-tight text-white">
                Secure<span className="text-accent-cyan">NIS2</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              We provide world-class security consulting to help organizations navigate the complex landscape of EU cybersecurity regulations.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-accent-cyan transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent-cyan transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent-cyan transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent-cyan transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} SecureNIS2 Consultancy. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm">
            Designed for EU Compliance.
          </p>
        </div>
      </div>
    </footer>
  );
};