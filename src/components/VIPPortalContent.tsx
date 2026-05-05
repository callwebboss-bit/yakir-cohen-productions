"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Lock, ArrowLeft, Wifi, School, Music, Share2, CheckCircle2, Play, ShoppingBag } from "lucide-react";

const VIP_IMAGE = "/assets/images/recording-studio/יקיר כהן הפקות באולפן.webp";

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
      <div className={`w-full ${isLogged ? "max-w-4xl" : "max-w-md"} bg-white border border-zinc-200 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col`}>
        <div className="h-2 w-full bg-brand-red" />

        <header className={`p-10 flex flex-col items-center text-center border-b border-zinc-100 bg-surface ${isLogged ? "md:flex-row md:text-right md:justify-between" : ""}`}>
          <div className={`flex flex-col items-center ${isLogged ? "md:flex-row md:gap-6" : ""}`}>
            <Image
              src={VIP_IMAGE}
              width={96}
              height={96}
              className={`${isLogged ? "w-16 h-16" : "w-24 h-24"} rounded-full object-cover border-4 border-white shadow-lg mb-4 md:mb-0`}
              alt="יקיר כהן"
            />
            <div>
              <h1 className="font-serif text-3xl font-bold tracking-tight">{isLogged ? "שלום, ברוך הבא" : "פורטל VIP"}</h1>
              <p className="text-zinc-500 font-medium text-sm">
                {isLogged ? "האזור האישי שלכם בתוך המערכת" : "כניסה לאזור לקוחות ומעקב חומרים"}
              </p>
            </div>
          </div>
          {isLogged && (
            <button
              onClick={handleLogout}
              className="mt-6 md:mt-0 text-xs font-black tracking-widest text-zinc-400 hover:text-brand-red transition-colors cursor-pointer"
              aria-label="התנתקות מהפורטל"
            >
              התנתקות
            </button>
          )}
        </header>

        <main className="p-8">
          {!isLogged ? (
            <div className="space-y-10">
              <div className="bg-white border border-zinc-100 p-8 rounded-2xl shadow-sm space-y-6">
                <div className="flex items-center gap-3 text-brand-red">
                  <Lock size={20} />
                  <h2 className="font-bold tracking-tight text-sm">כניסה מאובטחת</h2>
                </div>
                <form className="space-y-6" onSubmit={handleLogin}>
                  <div className="space-y-1.5">
                    <label htmlFor="vip-phone" className="text-xs font-black tracking-widest text-zinc-400">מספר טלפון</label>
                    <input id="vip-phone" className="w-full border-b-2 border-zinc-100 py-3 text-lg focus:outline-none focus:border-black transition-colors" placeholder="05X-XXXXXXX" required />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="vip-code" className="text-xs font-black tracking-widest text-zinc-400">קוד חד פעמי</label>
                    <input id="vip-code" className="w-full border-b-2 border-zinc-100 py-3 text-center tracking-[1em] text-lg focus:outline-none focus:border-black transition-colors" placeholder="****" type="password" required />
                  </div>
                  <button type="submit" className="w-full bg-black text-white py-4 rounded font-bold hover:bg-brand-red transition-colors flex items-center justify-center gap-2 group cursor-pointer">
                    כניסה לפורטל
                    <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                  </button>
                  <button type="button" className="w-full text-zinc-400 font-bold text-sm hover:text-brand-red transition-colors cursor-pointer">
                    לא קיבלתי קוד
                  </button>
                </form>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-50 border border-zinc-100 p-5 rounded-2xl">
                  <div className="flex justify-between items-center mb-4 text-zinc-400">
                    <Wifi size={20} />
                    <span className="text-[10px] font-black bg-brand-red/10 text-brand-red px-2 py-0.5 rounded-full">Wi-Fi</span>
                  </div>
                  <h3 className="text-xs font-black text-zinc-400">רשת אורחים</h3>
                  <p className="font-mono text-sm font-bold mt-1 tracking-tight">YakirStudio_VIP</p>
                </div>
                <div className="bg-zinc-900 text-white p-5 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 opacity-20"><School size={60} /></div>
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <Music size={20} className="mb-4" />
                    <div>
                      <h3 className="text-xs font-black">נהלי אולפן</h3>
                      <p className="text-sm font-bold opacity-80">כל מה שכדאי לראות לפני שמגיעים</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-8">
                <section>
                  <h3 className="text-xs font-black tracking-widest text-zinc-400 mb-6">סשנים קרובים</h3>
                  <div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-6 flex justify-between items-center hover:border-brand-red transition-colors">
                    <div className="flex gap-6 items-center">
                      <div className="bg-white p-4 rounded-xl shadow-sm text-center min-w-[80px]">
                        <p className="text-xs font-black text-zinc-400">אפריל</p>
                        <p className="text-2xl font-serif font-black">28</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">סשן הקלטת שירה</h4>
                        <p className="text-sm text-zinc-500">14:00 - 18:00 | חדר הקלטה ראשי</p>
                      </div>
                    </div>
                    <CheckCircle2 className="text-zinc-200" />
                  </div>
                </section>

                <section>
                  <h3 className="text-xs font-black tracking-widest text-zinc-400 mb-6">קבצים מוכנים</h3>
                  <div className="space-y-4">
                    <FileRow name="Demo_Song_Mix_V1.wav" date="אתמול" size="42MB" />
                    <FileRow name="Final_Master_HD.wav" date="היום" size="45MB" isNew />
                  </div>
                </section>
              </div>

              <div className="space-y-8">
                <section className="bg-zinc-900 text-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-[10px] font-black tracking-widest text-white/40 mb-6">יתרת תשלום</h3>
                  <p className="text-4xl font-serif font-black mb-2">1,450 ש"ח</p>
                  <p className="text-xs text-white/60 mb-8 font-medium">עבור חבילת הסינגל</p>
                  <button className="w-full bg-brand-red text-white py-3 rounded font-bold hover:bg-red-700 transition-colors shadow-lg text-sm">
                    השלמת תשלום
                  </button>
                </section>

                <div className="bg-surface border border-zinc-200 p-8 rounded-2xl text-center space-y-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm text-brand-red">
                    <Share2 size={24} />
                  </div>
                  <h3 className="font-serif text-xl font-bold">שתפו את החוויה</h3>
                  <p className="text-sm text-zinc-500">אם בא לכם לפרגן, אפשר להשאיר המלצה ולשלוח לנו צילום מסך.</p>
                  <button className="w-full border border-black py-2.5 rounded font-bold hover:bg-black hover:text-white transition-colors text-sm cursor-pointer">
                    לשיתוף מהיר
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function FileRow({ name, date, size, isNew }: { name: string; date: string; size: string; isNew?: boolean }) {
  return (
    <div className="flex justify-between items-center p-4 bg-white border border-zinc-100 rounded-xl hover:border-black transition-colors group">
      <div className="flex gap-4 items-center">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isNew ? "bg-brand-red/10 text-brand-red" : "bg-zinc-50 text-zinc-400"}`}>
          <Play size={18} fill={isNew ? "currentColor" : "none"} />
        </div>
        <div>
          <h4 className="font-bold text-sm flex items-center gap-2">
            {name}
            {isNew && <span className="w-2 h-2 rounded-full bg-brand-red" />}
          </h4>
          <p className="text-[10px] text-zinc-400 font-medium">{date} • {size}</p>
        </div>
      </div>
      <button className="p-2 text-zinc-300 hover:text-brand-red transition-colors cursor-pointer" aria-label={`הזמנת פעולה עבור ${name}`}>
        <ShoppingBag size={20} />
      </button>
    </div>
  );
}
