import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2 } from 'lucide-react';
import { sendMessageToGeminiStream } from '../services/geminiService';
import { ChatMessage } from '../types';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am your NIS2 Compliance Assistant. Ask me about the directive, affected sectors, or how we can help you prepare.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      let fullResponse = "";
      setMessages(prev => [...prev, { role: 'model', text: '' }]); // Placeholder

      const stream = sendMessageToGeminiStream(userMessage);
      
      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = { role: 'model', text: fullResponse };
          return newMessages;
        });
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm sorry, I encountered an error. Please try again.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] sm:w-96 h-[500px] bg-brand-blue border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-slate-800 p-4 flex justify-between items-center border-b border-slate-700">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-accent-cyan rounded-full">
                <Bot size={18} className="text-black" />
              </div>
              <div>
                <h3 className="font-semibold text-white">NIS2 Assistant</h3>
                <p className="text-xs text-slate-400">Powered by Gemini AI</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Minimize2 size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-dark/50">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                  ${msg.role === 'user' ? 'bg-slate-700' : 'bg-accent-cyan/20'}
                `}>
                  {msg.role === 'user' ? <User size={16} /> : <Bot size={16} className="text-accent-cyan" />}
                </div>
                <div className={`
                  p-3 rounded-lg max-w-[80%] text-sm leading-relaxed
                  ${msg.role === 'user' 
                    ? 'bg-slate-700 text-white rounded-tr-none' 
                    : 'bg-brand-blue border border-slate-700 text-slate-200 rounded-tl-none'}
                  ${msg.isError ? 'text-red-400 border-red-900/50' : ''}
                `}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && messages[messages.length - 1]?.role === 'user' && (
               <div className="flex gap-3">
                 <div className="w-8 h-8 rounded-full bg-accent-cyan/20 flex items-center justify-center flex-shrink-0">
                   <Bot size={16} className="text-accent-cyan" />
                 </div>
                 <div className="bg-brand-blue border border-slate-700 p-3 rounded-lg rounded-tl-none">
                   <div className="flex gap-1">
                     <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></div>
                     <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-75"></div>
                     <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-150"></div>
                   </div>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 bg-brand-blue border-t border-slate-700">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about compliance..."
                className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-accent-cyan text-black rounded-md hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          p-4 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:scale-105
          ${isOpen ? 'bg-slate-700 text-white rotate-90' : 'bg-accent-cyan text-black'}
        `}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};