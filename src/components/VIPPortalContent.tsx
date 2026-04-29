"use client";

import React, { useState, useEffect } from "react";
import { Lock, ArrowLeft, Wifi, School, Music, Share2, CheckCircle2, Play, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function VIPPortalContent() {
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = localStorage.getItem("yakir_vip_session");
    if (session) setIsLogged(true);
    setLoading(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLogged(true);
    localStorage.setItem("yakir_vip_session", "true");
  };

  const handleLogout = () => {
    setIsLogged(false);
    localStorage.removeItem("yakir_vip_session");
  };

  if (loading) return null;

  return (
    <div className="flex justify-center py-20 px-6 min-h-[80vh] bg-surface">
       <div className={`w-full ${isLogged ? 'max-w-4xl' : 'max-w-md'} bg-white border border-zinc-200 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col transition-all duration-500`}>
          <div className="h-2 w-full bg-brand-red"></div>
          
          <header className={`p-10 flex flex-col items-center text-center border-b border-zinc-100 bg-surface ${isLogged ? 'md:flex-row md:text-right md:justify-between' : ''}`}>
            <div className={`flex flex-col items-center ${isLogged ? 'md:flex-row md:gap-6' : ''}`}>
              <img 
                 src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2670&auto=format&fit=crop" 
                 className={`${isLogged ? 'w-16 h-16' : 'w-24 h-24'} rounded-full object-cover border-4 border-white shadow-lg mb-4 md:mb-0 grayscale`}
                 alt="Yakir Cohen"
              />
              <div>
                <h1 className="font-serif text-3xl font-bold tracking-tight">{isLogged ? 'שלום, אמן יקר' : 'פורטל VIP'}</h1>
                <p className="text-zinc-500 font-medium text-sm">
                  {isLogged ? 'ברוך הבא לאזור האישי שלך' : 'כניסה למערכת ניהול הפרוייקטים'}
                </p>
              </div>
            </div>
            {isLogged && (
              <button 
                onClick={handleLogout}
                className="mt-6 md:mt-0 text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-brand-red transition-all cursor-pointer"
              >
                התנתקות
              </button>
            )}
          </header>

          <main className="p-8">
            <AnimatePresence mode="wait">
              {!isLogged ? (
                <motion.div 
                  key="login"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-10"
                >
                  <div className="bg-white border border-zinc-100 p-8 rounded-2xl shadow-sm space-y-6">
                     <div className="flex items-center gap-3 text-brand-red">
                       <Lock size={20} />
                       <h2 className="font-bold tracking-tight uppercase text-sm">כניסה מאובטחת</h2>
                     </div>
                     <form className="space-y-6" onSubmit={handleLogin}>
                       <div className="space-y-1.5">
                         <label className="text-xs font-black tracking-widest text-zinc-400">מספר טלפון</label>
                         <input className="w-full border-b-2 border-zinc-100 py-3 text-lg focus:outline-none focus:border-black transition-all" placeholder="05X-XXXXXXX" required />
                       </div>
                       <div className="space-y-1.5">
                         <label className="text-xs font-black tracking-widest text-zinc-400">קוד סודי (נשלח ב-SMS)</label>
                         <input className="w-full border-b-2 border-zinc-100 py-3 text-center tracking-[1em] text-lg focus:outline-none focus:border-black transition-all" placeholder="****" type="password" required />
                       </div>
                       <button type="submit" className="w-full bg-black text-white py-4 rounded font-bold hover:bg-brand-red transition-all flex items-center justify-center gap-2 group cursor-pointer">
                         כניסה לפורטל
                         <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                       </button>
                       <button type="button" className="w-full text-zinc-400 font-bold text-sm hover:text-brand-red transition-all cursor-pointer">לא קיבלתי קוד?</button>
                     </form>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-zinc-50 border border-zinc-100 p-5 rounded-2xl">
                       <div className="flex justify-between items-center mb-4 text-zinc-400">
                          <Wifi size={20} />
                          <span className="text-[10px] font-black bg-brand-red/10 text-brand-red px-2 py-0.5 rounded-full">חינם</span>
                       </div>
                       <h3 className="text-xs font-black text-zinc-400">רשת אורחים</h3>
                       <p className="font-mono text-sm font-bold mt-1 tracking-tight">YakirStudio_VIP</p>
                     </div>
                     <div className="bg-zinc-900 text-white p-5 rounded-2xl relative overflow-hidden group hover:bg-brand-red transition-all cursor-pointer">
                       <div className="absolute top-0 right-0 p-2 opacity-20"><School size={60} /></div>
                       <div className="relative z-10 flex flex-col h-full justify-between">
                          <Music size={20} className="mb-4" />
                          <div>
                            <h3 className="text-xs font-black">נהלי אולפן</h3>
                            <p className="text-sm font-bold opacity-80">קראו לפני ההגעה</p>
                          </div>
                       </div>
                     </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="dashboard"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  <div className="md:col-span-2 space-y-8">
                    <section>
                      <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-6">סשנים קרובים</h3>
                      <div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-6 flex justify-between items-center group hover:border-brand-red transition-all">
                        <div className="flex gap-6 items-center">
                          <div className="bg-white p-4 rounded-xl shadow-sm text-center min-w-[80px]">
                            <p className="text-xs font-black text-zinc-400 uppercase">אפריל</p>
                            <p className="text-2xl font-serif font-black">28</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-lg">סשן הקלטת שירה</h4>
                            <p className="text-sm text-zinc-500">14:00 - 18:00 | חדר אקוסטי ראשי</p>
                          </div>
                        </div>
                        <CheckCircle2 className="text-zinc-200 group-hover:text-brand-red transition-colors" />
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-6">קבצים מוכנים (Cloud)</h3>
                      <div className="space-y-4">
                        <FileRow name="Demo_Song_Mix_V1.wav" date="אתמול" size="42MB" />
                        <FileRow name="Final_Master_HD.wav" date="היום" size="45MB" isNew />
                      </div>
                    </section>
                  </div>

                  <div className="space-y-8">
                    <section className="bg-zinc-900 text-white p-8 rounded-2xl shadow-xl">
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-6">יתרת תשלום</h3>
                      <p className="text-4xl font-serif font-black mb-2">₪1,450</p>
                      <p className="text-xs text-white/60 mb-8 font-medium">עבור חבילת הסילבר שלכם</p>
                      <button className="w-full bg-brand-red text-white py-3 rounded font-bold hover:scale-105 active:scale-95 transition-all shadow-lg text-sm">
                        השלמת תשלום מהירה
                      </button>
                    </section>

                    <div className="bg-surface border border-zinc-200 p-8 rounded-2xl text-center space-y-4">
                       <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm text-brand-red">
                         <Share2 size={24} />
                       </div>
                       <h3 className="font-serif text-xl font-bold">שתפו את ההצלחה</h3>
                       <p className="text-sm text-zinc-500">נשמח שתכתבו עלינו המלצה בגוגל ותקבלו הטבה לסשן הבא.</p>
                       <button className="w-full border border-black py-2.5 rounded font-bold hover:bg-black hover:text-white transition-all text-sm cursor-pointer">שיתוף החוויה</button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
       </div>
    </div>
  );
}

function FileRow({ name, date, size, isNew }: { name: string, date: string, size: string, isNew?: boolean }) {
  return (
    <div className="flex justify-between items-center p-4 bg-white border border-zinc-100 rounded-xl hover:border-black transition-all group">
      <div className="flex gap-4 items-center">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isNew ? 'bg-brand-red/10 text-brand-red' : 'bg-zinc-50 text-zinc-400'}`}>
          <Play size={18} fill={isNew ? 'currentColor' : 'none'} />
        </div>
        <div>
          <h4 className="font-bold text-sm flex items-center gap-2">
            {name}
            {isNew && <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>}
          </h4>
          <p className="text-[10px] text-zinc-400 font-medium">{date} • {size}</p>
        </div>
      </div>
      <button className="p-2 text-zinc-300 hover:text-brand-red transition-colors cursor-pointer">
        <ShoppingBag size={20} />
      </button>
    </div>
  );
}
