import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutNIS2 } from './components/AboutNIS2';
import { Services } from './components/Services';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { initializeChat } from './services/geminiService';

const App: React.FC = () => {
  
  // Initialize AI service on mount (optional, or lazy load in widget)
  useEffect(() => {
    // We can pre-warm the chat or wait for user interaction
    if (process.env.API_KEY) {
      initializeChat();
    }
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden">
      <Header />
      
      <main>
        <Hero />
        <AboutNIS2 />
        <Services />
        
        {/* Trust/Stats Section */}
        <section className="py-12 bg-accent-cyan">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-black/10">
              <div>
                <p className="text-3xl font-bold text-brand-dark">100+</p>
                <p className="text-brand-dark/80 font-medium">Audits Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-dark">€0</p>
                <p className="text-brand-dark/80 font-medium">Client Fines</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-dark">24/7</p>
                <p className="text-brand-dark/80 font-medium">Support</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-dark">100%</p>
                <p className="text-brand-dark/80 font-medium">Compliance Rate</p>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;