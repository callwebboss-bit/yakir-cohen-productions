"use client";

import React, { useState } from "react";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function GalAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "שלום! אני גל, העוזרת החכמה של יקיר כהן. איך אוכל לעזור לכם היום עם סאונד, פיתוח קול או הפקה?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    // Simple auto-reply simulation
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "מעולה! בוא נמשיך את השיחה בווטסאפ של יקיר לתיאום מהיר." 
      }]);
    }, 1000);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("היי יקיר, הגעתי מהאתר ואשמח לקבל פרטים נוספים.");
    window.open(`https://wa.me/972528701918?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-8 left-8 z-[100] scale-rtl">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 left-0 w-80 md:w-96 bg-white border border-zinc-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[500px]"
          >
            <div className="bg-zinc-900 text-white p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="font-bold">גל - עוזרת אישית</h3>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest">מחוברת כעת</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-grow p-6 overflow-y-auto space-y-4 bg-zinc-50">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-black text-white rounded-tr-none' 
                      : 'bg-white border border-zinc-200 text-zinc-900 rounded-tl-none shadow-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-white border-t border-zinc-100 space-y-2">
              <button 
                onClick={openWhatsApp}
                className="w-full bg-green-500 text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-colors shadow-md"
              >
                מעבר ל-WhatsApp
              </button>
              <div className="flex gap-2">
                <input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="כתבו הודעה..."
                  className="flex-grow bg-zinc-100 border-none rounded-full px-6 py-3 text-sm focus:ring-2 focus:ring-brand-red outline-none"
                />
                <button 
                  onClick={handleSend}
                  className="w-11 h-11 bg-brand-red text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-brand-red text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform border-4 border-white relative"
      >
        <span className="absolute inset-0 rounded-full bg-brand-red animate-ping opacity-20"></span>
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
}
