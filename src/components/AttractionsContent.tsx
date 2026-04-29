"use client";

import React, { useState, useEffect } from "react";
import { ShoppingBag, CheckCircle2, ArrowLeft, Star, Heart, Flame, Sparkles, Gift } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Choice {
  id: string;
  title: string;
  price: number;
  desc: string;
  icon: React.ReactNode;
}

const STEP_DATA = [
  {
    title: "רגעי שיא (Peak Moments)",
    desc: "בחרו את האפקטים שיהפכו את רגע הכניסה או הריקוד הראשון לבלתי נשכח.",
    choices: [
      { id: "smoke", title: "עשן כבד", price: 800, desc: "ענן לבן וסמיך לריקוד ראשון חלומי", icon: <Flame size={32} /> },
      { id: "confetti", title: "קונפטי", price: 500, desc: "פיצוץ צבעוני ומרהיב לרגע השיא", icon: <Star size={32} /> },
      { id: "fireworks", title: "זיקוקים קרים", price: 1200, desc: "שדרות זיקוקים בטיחותיים", icon: <Sparkles size={32} /> }
    ]
  },
  {
    title: "מגנטים ומזכרות",
    desc: "תיעוד חי ומרגש של האורחים שלכם לאורך כל האירוע.",
    choices: [
      { id: "magnets", title: "מגנטים ללא הגבלה", price: 1500, desc: "הדפסה תרמית איכותית לכל האורחים", icon: <Heart size={32} /> },
      { id: "blocks", title: "בלוקים מעץ", price: 2000, desc: "מזכרת יוקרתית על עץ טבעי", icon: <Star size={32} /> },
      { id: "selfie", title: "עמדת סלפי", price: 1000, desc: "עמדה דיגיטלית עם שיתוף מיידי", icon: <Gift size={32} /> }
    ]
  }
];

export default function AttractionsContent() {
  const [step, setStep] = useState(1);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [total, setTotal] = useState(0);

  const toggleChoice = (id: string, price: number) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const count = selectedIds.length;
    let newTotal = 0;
    
    if (count === 1) newTotal = 1750;
    else if (count === 2) newTotal = 3200;
    else if (count === 3) newTotal = 4450;
    else if (count >= 4) newTotal = 5500;
    
    setTotal(newTotal);
  }, [selectedIds]);

  const currentStepData = STEP_DATA[step - 1];

  const getUnlockedGift = () => {
    if (total > 3000) return "כניסת אולפן מוזלת";
    if (total > 2000) return "מארז מגנטים נוסף";
    if (total > 1000) return "קונפטי מתנה";
    return null;
  };

  const gift = getUnlockedGift();

  return (
    <div className="min-h-screen bg-zinc-50 pb-40">
      <div className="max-w-4xl mx-auto px-6 pt-16">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl font-bold mb-4">מחשבון אטרקציות</h1>
          <p className="text-zinc-500 font-medium">ככל שתבחרו יותר, תפתחו מתנות יוקרתיות יותר להפקה שלכם.</p>
        </div>

        <div className="bg-white border border-zinc-200 rounded-3xl shadow-xl overflow-hidden min-h-[600px] flex flex-col">
          <div className="w-full bg-zinc-100 h-2">
            <motion.div 
               className="bg-brand-red h-full" 
               initial={{ width: '0%' }}
               animate={{ width: `${(step / STEP_DATA.length) * 100}%` }}
               transition={{ type: 'spring', stiffness: 50 }}
            />
          </div>
          
          <div className="p-8 md:p-12 flex-grow">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="flex justify-between items-center mb-10">
                  <h2 className="font-serif text-3xl font-bold">שלב {step}: {currentStepData?.title}</h2>
                  <span className="bg-zinc-100 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">{step} מתוך {STEP_DATA.length}</span>
                </div>
                <p className="text-zinc-500 mb-10">{currentStepData?.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {currentStepData?.choices.map((choice) => (
                    <ChoiceCard 
                      key={choice.id}
                      icon={choice.icon} 
                      title={choice.title} 
                      price={choice.price} 
                      desc={choice.desc}
                      selected={selectedIds.includes(choice.id)}
                      onClick={() => toggleChoice(choice.id, choice.price)}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="p-8 md:p-12 border-t border-zinc-100 flex justify-between items-center bg-zinc-50/50">
             <button 
                disabled={step === 1}
                onClick={() => setStep(s => s - 1)}
                className="px-8 py-3 rounded border border-zinc-200 text-zinc-400 font-bold disabled:opacity-50 cursor-pointer hover:bg-white transition-all"
              >
                הקודם
              </button>
             <button 
                onClick={() => setStep(s => Math.min(STEP_DATA.length, s + 1))}
                className="bg-black text-white px-10 py-3 rounded font-bold hover:bg-brand-red transition-all flex items-center gap-2 cursor-pointer shadow-lg"
              >
                {step === STEP_DATA.length ? 'סיכום חבילה' : 'הבא'}
                <ArrowLeft size={18} />
              </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-zinc-200 p-6 z-40 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-50 text-brand-red rounded-full flex items-center justify-center border border-brand-red/10 overflow-hidden">
                  <ShoppingBag size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest leading-none mb-1">סה"כ הפקה:</p>
                  <p className="text-3xl font-serif font-black leading-none">₪{total.toLocaleString()}</p>
                </div>
             </div>

             {gift && (
               <motion.div 
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 className="flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full border border-green-100"
               >
                 <Gift size={16} />
                 <span className="text-xs font-bold font-sans">בונוס נפתח: {gift}</span>
               </motion.div>
             )}
          </div>
          
          <button className="w-full md:w-auto bg-brand-red text-white px-10 py-4 rounded font-bold hover:scale-105 active:scale-95 transition-all shadow-xl cursor-pointer">
             סיום והזמנת הפקה
          </button>
        </div>
      </div>
    </div>
  );
}

function ChoiceCard({ icon, title, price, desc, selected, onClick }: { icon: React.ReactNode, title: string, price: number, desc: string, selected: boolean, onClick: () => void }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`p-8 rounded-2xl border-2 transition-all cursor-pointer flex flex-col items-center text-center gap-4 relative min-h-[220px] justify-center ${selected ? 'border-brand-red bg-red-50/50 ring-4 ring-brand-red/5 shadow-lg' : 'border-zinc-100 hover:border-zinc-300 bg-white'}`}
    >
      {selected && (
        <div className="absolute top-4 left-4 bg-brand-red text-white p-1 rounded-full shadow-lg">
          <CheckCircle2 size={16} />
        </div>
      )}
      <div className={`transition-colors flex items-center justify-center ${selected ? 'text-brand-red' : 'text-zinc-300'}`}>
        {icon}
      </div>
      <div>
        <h3 className="font-serif text-xl font-bold">{title}</h3>
        <p className="text-[10px] text-zinc-400 line-clamp-2 mt-1 leading-tight">{desc}</p>
      </div>
      <div className="mt-2 text-xl font-black font-serif leading-none">₪{price}</div>
    </motion.div>
  );
}
