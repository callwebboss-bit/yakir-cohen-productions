"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";

/* ── Availability helper ── */
function isOpen(): boolean {
  const h = new Date().getHours();
  const d = new Date().getDay();
  return d !== 6 && !(d === 5 && h >= 16) && !(d === 0 && h < 9) && h >= 10 && h < 22;
}

function getInitialMessage(): string {
  const now  = new Date();
  const day  = now.getDay();
  const hour = now.getHours();
  const closed = day === 6 || (day === 5 && hour >= 16) || (day === 0 && hour < 9);
  const afterHours = !closed && (hour < 10 || hour >= 22);
  if (closed)     return "האולפן סגור עכשיו. נחזור ביום ראשון מ-9:00. שלחו הודעה בווטסאפ ונחזור בהקדם.";
  if (afterHours) return "האולפן סגור כרגע (שעות פעילות: ראשון–חמישי 10:00–22:00). אפשר להשאיר הודעה ונחזור.";
  return "שלום! אני גל, העוזרת החכמה של יקיר כהן. איך אוכל לעזור לכם היום עם סאונד, פיתוח קול או הפקה?";
}

interface Message { role: "user" | "assistant"; content: string; }

export default function GalAssistant() {
  const [isOpenState, setIsOpenState] = useState(false);
  const [messages, setMessages]       = useState<Message[]>(() => [
    { role: "assistant", content: getInitialMessage() },
  ]);
  const [input, setInput]       = useState("");
  const inputRef                = useRef<HTMLInputElement>(null);
  const messagesEndRef           = useRef<HTMLDivElement>(null);
  const panelRef                 = useRef<HTMLDivElement>(null);

  /* Scroll message list to bottom on new messages */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* Move focus to input when panel opens */
  useEffect(() => {
    if (isOpenState) inputRef.current?.focus();
  }, [isOpenState]);

  /* Trap focus inside the panel when open */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") { setIsOpenState(false); return; }
    if (e.key !== "Tab" || !panelRef.current) return;

    const focusable = Array.from(
      panelRef.current.querySelectorAll<HTMLElement>(
        'input, button, [href], [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => !el.hasAttribute("disabled"));

    if (!focusable.length) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const updated: Message[] = [...messages, { role: "user", content: input }];
    setMessages(updated);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "מעולה! בוא נמשיך את השיחה בווטסאפ של יקיר לתיאום מהיר." },
      ]);
    }, 1000);
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent("היי יקיר, הגעתי מהאתר ואשמח לקבל פרטים נוספים.");
    window.open(`https://wa.me/972587555456?text=${msg}`, "_blank");
  };

  const available = isOpen();

  return (
    /* Position: bottom-start (logical — RTL-aware) */
    <div className="fixed bottom-8 start-8 z-[100]">

      {/*
        Chat panel — CSS transition replaces framer-motion (~30 KB saved).
        aria-hidden when closed so AT ignores the offscreen content.
        pointer-events-none prevents interaction without display:none (avoids reflow).
      */}
      <div
        ref={panelRef}
        aria-hidden={!isOpenState}
        onKeyDown={isOpenState ? handleKeyDown : undefined}
        className={[
          "absolute bottom-20 start-0 w-80 md:w-96 bg-white border border-zinc-200",
          "rounded-3xl shadow-2xl overflow-hidden flex flex-col",
          /* min-height prevents CLS when messages load */
          "h-[500px]",
          /* CSS transition — no JS animation library needed */
          "transition-all duration-200 origin-bottom-left",
          isOpenState
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-90 translate-y-3 pointer-events-none",
        ].join(" ")}
      >
        {/* Header */}
        <div className="bg-zinc-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#D42B2B] rounded-full flex items-center justify-center shrink-0">
              <Sparkles size={20} aria-hidden="true" />
            </div>
            <div>
              {/* id used as aria-labelledby on the panel */}
              <p id="gal-title" className="font-bold leading-tight">גל - עוזרת אישית</p>
              {/* Status indicator — visible text, no aria override needed */}
              <p className="text-[10px] text-white/50 uppercase tracking-widest mt-0.5">
                {available ? "מחוברת כעת" : "לא זמינים כרגע"}
              </p>
            </div>
          </div>
          {/* Icon-only close button — aria-label required */}
          <button
            onClick={() => setIsOpenState(false)}
            aria-label="סגור את הצ׳אט"
            className="text-white/50 hover:text-white transition-colors p-1.5 rounded"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/*
          role="log" — live region for chat messages.
          aria-live="polite" (implicit on log) — new messages announced without interrupting.
        */}
        <div
          role="log"
          aria-label="שיחה עם גל"
          aria-live="polite"
          className="flex-grow p-5 overflow-y-auto space-y-4 bg-zinc-50"
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-zinc-900 text-white rounded-tr-none"
                    : "bg-white border border-zinc-200 text-zinc-900 rounded-tl-none shadow-sm"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {/* Scroll anchor */}
          <div ref={messagesEndRef} aria-hidden="true" />
        </div>

        {/* Input area */}
        <div className="p-4 bg-white border-t border-zinc-100 flex flex-col gap-2">
          <button
            onClick={openWhatsApp}
            className="w-full bg-green-500 text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-green-600 active:bg-green-700 transition-colors"
          >
            המשך בוואטסאפ
          </button>
          <div className="flex gap-2">
            <label htmlFor="gal-input" className="sr-only">כתוב הודעה לגל</label>
            <input
              id="gal-input"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="כתבו הודעה..."
              className="flex-grow bg-zinc-100 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D42B2B]"
            />
            {/* Icon-only send button */}
            <button
              onClick={handleSend}
              aria-label="שלח הודעה"
              disabled={!input.trim()}
              className="w-11 h-11 bg-[#D42B2B] text-white rounded-full flex items-center justify-center hover:bg-red-700 active:bg-red-800 transition-colors disabled:opacity-40 shrink-0"
            >
              <Send size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/*
        Toggle button:
        - aria-expanded reflects open/closed state for AT.
        - aria-controls references the panel (same-page element).
        - aria-label changes contextually.
        - w-16 h-16 = 64×64 px — exceeds 44×44 WCAG tap target minimum.
      */}
      <button
        onClick={() => setIsOpenState((v) => !v)}
        aria-expanded={isOpenState}
        aria-controls="gal-panel"
        aria-label={isOpenState ? "סגור את הצ׳אט עם גל" : "פתח צ׳אט עם גל, העוזרת האישית"}
        className="relative w-16 h-16 bg-[#D42B2B] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-red-700 active:bg-red-800 transition-colors border-4 border-white"
      >
        {/* Pulse ring — aria-hidden (purely decorative) */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#D42B2B] motion-safe:animate-ping opacity-20"
        />
        {isOpenState
          ? <X size={28} aria-hidden="true" />
          : <MessageSquare size={28} aria-hidden="true" />
        }
      </button>
    </div>
  );
}
