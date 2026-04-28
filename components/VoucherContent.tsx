"use client";

import React, { useState, useRef, useEffect } from "react";
import { Download, Gift, RefreshCw } from "lucide-react";

export default function VoucherContent() {
  const [data, setData] = useState({
    recipient: "ישראל ישראלי",
    sender: "יקיר כהן הפקות",
    amount: 500,
    message: "מתנה מוזיקלית מהלב",
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawVoucher = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear and background
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Gradient Background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#18181b"); // zinc-900
    gradient.addColorStop(1, "#bc0100"); // brand-red
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Border
    ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
    ctx.lineWidth = 20;
    ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);

    // Logo Text
    ctx.fillStyle = "white";
    ctx.font = "bold 40px Assistant, sans-serif";
    ctx.textAlign = "right";
    ctx.fillText("יקיר כהן הפקות", canvas.width - 100, 120);
    
    // Title
    ctx.font = "italic bold 80px Platypi, serif";
    ctx.textAlign = "center";
    ctx.fillText("שובר מתנה", canvas.width / 2, 280);

    // Amount
    ctx.font = "black 120px Assistant, sans-serif";
    ctx.fillText(`₪${data.amount}`, canvas.width / 2, 450);

    // Details - Recipient
    ctx.font = "30px Assistant, sans-serif";
    ctx.textAlign = "right";
    ctx.fillText(`לכבוד: ${data.recipient}`, canvas.width - 120, 600);
    
    // Message
    ctx.font = "italic 24px Assistant, sans-serif";
    ctx.fillText(data.message, canvas.width - 120, 660);

    // Footer info
    ctx.font = "20px Assistant, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("בתוקף ל-12 חודשים מיום ההנפקה | למימוש באולפן או בקליניקה", canvas.width / 2, canvas.height - 100);
  };

  useEffect(() => {
    // Load font before drawing
    document.fonts.ready.then(drawVoucher);
  }, [data]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `Voucher_${data.recipient}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="py-24 px-6 bg-zinc-50 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <div>
            <h1 className="font-serif text-5xl font-bold mb-4 italic">יוצר השוברים</h1>
            <p className="text-zinc-500 font-medium">עצבו שובר מתנה אישי לרגעים מוזיקליים בלתי נשכחים.</p>
          </div>

          <div className="bg-white p-10 rounded-3xl border border-zinc-200 shadow-xl space-y-8">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-zinc-400">שם המקבל/ת</label>
              <input 
                value={data.recipient}
                onChange={e => setData({...data, recipient: e.target.value})}
                className="w-full border-b-2 border-zinc-100 py-3 text-xl focus:outline-none focus:border-brand-red transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-zinc-400">סכום השובר (₪)</label>
              <input 
                type="number"
                value={data.amount}
                onChange={e => setData({...data, amount: parseInt(e.target.value) || 0})}
                className="w-full border-b-2 border-zinc-100 py-3 text-3xl font-serif font-black focus:outline-none focus:border-brand-red transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-zinc-400">הקדשה אישית</label>
              <textarea 
                value={data.message}
                onChange={e => setData({...data, message: e.target.value})}
                rows={3}
                className="w-full border border-zinc-100 rounded-2xl p-4 text-sm focus:outline-none focus:border-brand-red transition-all bg-zinc-50"
              />
            </div>

            <div className="flex gap-4">
              <button 
                onClick={handleDownload}
                className="flex-grow bg-black text-white py-5 rounded-2xl font-bold hover:bg-brand-red transition-all flex items-center justify-center gap-2 shadow-xl"
              >
                <Download size={20} />
                הורדת שובר
              </button>
              <button 
                onClick={drawVoucher}
                className="w-16 h-16 border border-zinc-200 rounded-2xl flex items-center justify-center hover:bg-zinc-50 transition-colors"
              >
                <RefreshCw size={24} className="text-zinc-400" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
            <div className="sticky top-24">
                <div className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-6 flex items-center gap-2">
                    <Gift size={16} />
                    תצוגה מקדימה (Native Render)
                </div>
                <div className="rounded-3xl border-8 border-white shadow-[0_40px_100px_rgba(0,0,0,0.2)] overflow-hidden bg-zinc-900 group">
                    <canvas 
                        ref={canvasRef} 
                        width={1000} 
                        height={800} 
                        className="w-full max-w-xl cursor-crosshair group-hover:scale-105 transition-transform duration-700" 
                    />
                </div>
                <p className="mt-8 text-center text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
                    השובר מיוצר בזמן אמת בתוך הדפדפן שלך. <br/> איכות ההורדה: High Resolution 1000x800px.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
