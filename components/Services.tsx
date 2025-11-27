import React from 'react';
import { Search, Shield, BookOpen, FileCheck } from 'lucide-react';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Gap Analysis & Audit",
      description: "We evaluate your current security posture against NIS2 requirements to identify missing controls and vulnerabilities.",
      icon: <Search className="w-8 h-8" />
    },
    {
      title: "Implementation Strategy",
      description: "Custom roadmaps to implement necessary technical, operational, and organizational measures required by the directive.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Management Training",
      description: "Specialized training for board members and C-level executives to understand their new legal responsibilities and risks.",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      title: "Ongoing Compliance",
      description: "Continuous monitoring and reporting services to ensure you remain compliant as threats and regulations evolve.",
      icon: <FileCheck className="w-8 h-8" />
    }
  ];

  return (
    <section id="services" className="py-20 relative">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Compliance Solutions</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From initial assessment to full certification, we guide you through every step of the NIS2 compliance journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-6 bg-brand-blue rounded-xl border border-slate-800 hover:border-accent-cyan hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300"
            >
              <div className="mb-6 p-4 bg-brand-dark rounded-lg inline-block text-accent-cyan group-hover:bg-accent-cyan group-hover:text-black transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};