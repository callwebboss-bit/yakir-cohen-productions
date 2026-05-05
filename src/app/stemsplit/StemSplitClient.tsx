"use client";

import React, { useState, useRef, useEffect, useCallback, DragEvent } from "react";
import { Download, Upload, Link as LinkIcon, Mic, Music, Loader2, CheckCircle, AlertCircle, Copy, Check } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
type Mode = "idle" | "uploading" | "processing" | "done" | "error";
type InputTab = "file" | "url";

interface Stems {
  vocals: string;
  instrumental: string;
}

// ─── Audio Player ─────────────────────────────────────────────────────────────
function AudioPlayer({ src, label, icon }: { src: string; label: string; icon: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [copied, setCopied] = useState(false);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    playing ? a.pause() : a.play();
    setPlaying(!playing);
  };

  const onTimeUpdate = () => {
    const a = audioRef.current;
    if (!a || !a.duration) return;
    setProgress((a.currentTime / a.duration) * 100);
  };

  const onEnded = () => setPlaying(false);
  const onLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const a = audioRef.current;
    if (!a) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    a.currentTime = pct * a.duration;
  };

  const fmt = (s: number) =>
    `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

  const copyLink = async () => {
    await navigator.clipboard.writeText(src);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="stem-card">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={onTimeUpdate}
        onEnded={onEnded}
        onLoadedMetadata={onLoadedMetadata}
        preload="metadata"
      />

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center stem-icon-bg">
          {icon}
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-[#C9A84C]">ערוץ</p>
          <p className="text-white font-bold text-lg leading-tight">{label}</p>
        </div>
      </div>

      {/* Play button + waveform bar */}
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={toggle}
          aria-label={playing ? `עצור ${label}` : `הפעל ${label}`}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B2FBE] to-[#9B4FDE] flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-[#7B2FBE]/30 shrink-0"
        >
          {playing ? (
            <span className="flex gap-0.5 items-center">
              <span className="w-1 h-4 bg-white rounded-full" />
              <span className="w-1 h-4 bg-white rounded-full" />
            </span>
          ) : (
            <span className="w-0 h-0 border-y-[7px] border-y-transparent border-l-[14px] border-l-white ms-1" />
          )}
        </button>

        <div className="flex-1">
          <div
            className="h-2 bg-white/10 rounded-full cursor-pointer overflow-hidden"
            onClick={seek}
            aria-label="סרגל ניגון"
          >
            <div
              className="h-full bg-gradient-to-r from-[#7B2FBE] to-[#C9A84C] rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-white/40 mt-1.5 text-left ltr">
            {fmt((progress / 100) * duration)} / {fmt(duration)}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <a
          href={src}
          download
          className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold text-white/80 hover:text-white transition-all"
          aria-label={`הורד ${label}`}
        >
          <Download size={14} />
          הורד
        </a>
        <button
          onClick={copyLink}
          className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold text-white/80 hover:text-white transition-all"
          aria-label={`העתק קישור ל-${label}`}
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          {copied ? "הועתק!" : "קישור"}
        </button>
      </div>
    </div>
  );
}

// ─── Progress Bar ─────────────────────────────────────────────────────────────
function ProgressBar({ mode, progress }: { mode: Mode; progress: number }) {
  const statusMap: Record<Mode, string> = {
    idle: "",
    uploading: "מעלה קובץ...",
    processing: "מפריד ערוצים עם AI...",
    done: "הושלם! ✓",
    error: "שגיאה",
  };

  if (mode === "idle") return null;

  return (
    <div className="mt-8 px-2" aria-live="polite" aria-label="סטטוס עיבוד">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-white/70 font-medium">{statusMap[mode]}</span>
        <span className="text-[#C9A84C] font-black">{Math.round(progress)}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${progress}%`,
            background: mode === "error"
              ? "#ef4444"
              : mode === "done"
              ? "linear-gradient(to right, #7B2FBE, #C9A84C)"
              : "linear-gradient(to right, #7B2FBE, #9B4FDE)",
          }}
        />
      </div>
      {mode === "processing" && (
        <p className="text-xs text-white/40 mt-2 text-center">
          לרוב לוקח 1–3 דקות, תלוי באורך השיר
        </p>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function StemSplitClient() {
  const [tab, setTab]       = useState<InputTab>("file");
  const [file, setFile]     = useState<File | null>(null);
  const [url, setUrl]       = useState("");
  const [dragging, setDrag] = useState(false);
  const [mode, setMode]     = useState<Mode>("idle");
  const [progress, setProg] = useState(0);
  const [stems, setStems]   = useState<Stems | null>(null);
  const [error, setError]   = useState<string | null>(null);
  const [credits, setCredits] = useState<number | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Fetch credits on mount ──
  useEffect(() => {
    fetch("/api/split/credits")
      .then((r) => r.json())
      .then((d) => setCredits(d.credits))
      .catch(() => {});
  }, []);

  // ── Cleanup polling on unmount ──
  useEffect(() => () => { if (pollRef.current) clearInterval(pollRef.current); }, []);

  // ── Drag & drop handlers ──
  const onDragOver  = (e: DragEvent) => { e.preventDefault(); setDrag(true); };
  const onDragLeave = ()              => setDrag(false);
  const onDrop      = (e: DragEvent) => {
    e.preventDefault();
    setDrag(false);
    const f = e.dataTransfer.files[0];
    if (f) acceptFile(f);
  };

  const acceptFile = (f: File) => {
    if (!f.type.startsWith("audio/") && !f.name.match(/\.(mp3|wav|m4a|flac|ogg)$/i)) {
      setError("נא להעלות קובץ אודיו (MP3, WAV, M4A, FLAC)");
      return;
    }
    if (f.size > 50 * 1024 * 1024) {
      setError("הקובץ גדול מ-50MB");
      return;
    }
    setFile(f);
    setError(null);
  };

  // ── Poll job status ──
  const startPolling = useCallback((id: string) => {
    setMode("processing");
    setProg(35);

    let apiProgress = 35;

    pollRef.current = setInterval(async () => {
      try {
        const res  = await fetch(`/api/split?id=${id}`);
        const data = await res.json() as {
          status: string;
          progress: number | null;
          vocals: string | null;
          instrumental: string | null;
          error: string | null;
        };

        // Smoothly animate toward reported progress
        if (data.progress != null) {
          apiProgress = Math.max(apiProgress, 35 + (data.progress * 0.55));
          setProg(Math.min(apiProgress, 90));
        } else {
          apiProgress = Math.min(apiProgress + 3, 90);
          setProg(apiProgress);
        }

        if (data.status === "completed") {
          clearInterval(pollRef.current!);
          setProg(100);
          setMode("done");
          setStems({
            vocals: data.vocals ?? "",
            instrumental: data.instrumental ?? "",
          });
        } else if (data.status === "failed") {
          clearInterval(pollRef.current!);
          setMode("error");
          setError(data.error ?? "העיבוד נכשל. נסה שוב.");
        }
      } catch {
        // transient network error — keep polling
      }
    }, 3000);
  }, []);

  // ── Submit ──
  const handleSubmit = async () => {
    if (mode !== "idle" && mode !== "error") return;
    if (tab === "file" && !file) { setError("נא לבחור קובץ"); return; }
    if (tab === "url"  && !url.trim()) { setError("נא להזין כתובת URL"); return; }

    setError(null);
    setStems(null);
    setMode("uploading");
    setProg(10);

    try {
      let body: FormData | string;
      let headers: Record<string, string> = {};

      if (tab === "file" && file) {
        const fd = new FormData();
        fd.append("file", file);
        body = fd;
      } else {
        body = JSON.stringify({ url: url.trim() });
        headers["Content-Type"] = "application/json";
      }

      setProg(20);

      const res  = await fetch("/api/split", { method: "POST", headers, body });
      const data = await res.json() as { jobId?: string; error?: string };

      if (!res.ok || !data.jobId) {
        throw new Error(data.error ?? "שגיאה בהעלאה");
      }

      startPolling(data.jobId);
    } catch (err) {
      setMode("error");
      setProg(0);
      setError(err instanceof Error ? err.message : "שגיאה לא ידועה");
    }
  };

  const reset = () => {
    if (pollRef.current) clearInterval(pollRef.current);
    setMode("idle"); setFile(null); setUrl(""); setStems(null);
    setError(null); setProg(0);
  };

  const canSubmit = mode === "idle" || mode === "error";

  return (
    <>
      {/* ── Main Tool ── */}
      {/* Hero is server-rendered in page.tsx for LCP; this component loads after first paint */}
      <section className="px-6 pb-20 max-w-2xl mx-auto">

        {/* Credits badge — fetched after mount, non-blocking */}
        {credits !== null && (
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm">
              <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
              <span className="text-white/60">קרדיטים זמינים:</span>
              <span className="text-[#C9A84C] font-black">{credits}</span>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-1 bg-white/5 rounded-xl p-1 mb-6" role="tablist">
          {([["file", "העלה קובץ", Upload], ["url", "קישור URL", LinkIcon]] as const).map(([t, label, Icon]) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              onClick={() => { setTab(t); setError(null); }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
                tab === t ? "bg-[#7B2FBE] text-white shadow-lg" : "text-white/40 hover:text-white/70"
              }`}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </div>

        {/* Upload zone */}
        {tab === "file" ? (
          <div
            role="button"
            tabIndex={0}
            aria-label="גרור קובץ אודיו לכאן או לחץ לבחור קובץ"
            className={`upload-zone ${dragging ? "dragging" : ""} ${file ? "has-file" : ""}`}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            onClick={() => fileInputRef.current?.click()}
            onKeyDown={(e) => e.key === "Enter" && fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="audio/*,.mp3,.wav,.m4a,.flac,.ogg"
              className="sr-only"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) acceptFile(f); }}
              aria-label="בחר קובץ אודיו"
            />
            {file ? (
              <div className="text-center">
                <div className="w-14 h-14 bg-[#7B2FBE]/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Music size={24} className="text-[#C9A84C]" />
                </div>
                <p className="font-bold text-white">{file.name}</p>
                <p className="text-sm text-white/40 mt-1">{(file.size / 1024 / 1024).toFixed(1)} MB</p>
                <button
                  onClick={(e) => { e.stopPropagation(); setFile(null); }}
                  className="text-xs text-white/30 hover:text-white/60 mt-3 underline"
                  aria-label="הסר קובץ"
                >
                  הסר
                </button>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Upload size={24} className="text-white/30" />
                </div>
                <p className="text-white/60">גרור קובץ לכאן</p>
                <p className="text-sm text-white/30 mt-1">או לחץ לבחור</p>
                <p className="text-xs text-white/20 mt-3">MP3, WAV, FLAC, M4A · עד 50MB</p>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <label htmlFor="url-input" className="text-sm text-white/50 block mb-2 font-medium">
              קישור לקובץ אודיו (MP3, WAV וכו׳)
            </label>
            <input
              id="url-input"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/song.mp3"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#7B2FBE] transition-colors text-left ltr"
              dir="ltr"
              aria-label="כתובת URL של קובץ אודיו"
            />
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="flex items-center gap-2 mt-4 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm" role="alert">
            <AlertCircle size={15} className="shrink-0" />
            {error}
          </div>
        )}

        {/* Progress */}
        <ProgressBar mode={mode} progress={progress} />

        {/* Submit / Reset */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={handleSubmit}
            disabled={!canSubmit || (tab === "file" && !file) || (tab === "url" && !url.trim())}
            aria-label="התחל הפרדת ערוצים"
            className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-black text-base transition-all disabled:opacity-30 disabled:cursor-not-allowed submit-btn"
          >
            {mode === "uploading" || mode === "processing" ? (
              <><Loader2 size={18} className="animate-spin" /> מעבד...</>
            ) : mode === "done" ? (
              <><CheckCircle size={18} /> הושלם</>
            ) : (
              <><Music size={18} /> הפרד ערוצים</>
            )}
          </button>

          {(mode === "done" || mode === "error") && (
            <button
              onClick={reset}
              aria-label="התחל מחדש"
              className="px-5 py-4 rounded-xl border border-white/10 text-white/60 hover:text-white hover:border-white/30 font-bold transition-all text-sm"
            >
              חדש
            </button>
          )}
        </div>
      </section>

      {/* ── Results ── */}
      {mode === "done" && stems && (
        <section className="px-6 pb-20 max-w-2xl mx-auto" aria-label="תוצאות הפרדת ערוצים">
          <h2 className="text-2xl font-black text-center mb-8"
              style={{ fontFamily: '"Frank Ruhl Libre", serif' }}>
            <span className="gradient-text">הערוצים מוכנים</span> 🎛️
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stems.vocals && (
              <AudioPlayer
                src={stems.vocals}
                label="ווקאל"
                icon={<Mic size={18} className="text-[#C9A84C]" />}
              />
            )}
            {stems.instrumental && (
              <AudioPlayer
                src={stems.instrumental}
                label="פלייבק"
                icon={<Music size={18} className="text-[#C9A84C]" />}
              />
            )}
          </div>
          <p className="text-center text-xs text-white/25 mt-6">
            קישורי ההורדה בתוקף ל-24 שעות
          </p>
        </section>
      )}

      {/* ── How it works ── */}
      <section className="px-6 pb-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-12"
            style={{ fontFamily: '"Frank Ruhl Libre", serif' }}>
          איך זה עובד?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { n: "1", title: "העלו שיר", desc: "גרור קובץ MP3/WAV/FLAC, עד 50MB, או הדביקו קישור URL." },
            { n: "2", title: "AI מפריד", desc: "מנועי הבינה המלאכותית מנתחים כל תדר ומפרידים ווקאל מכלים." },
            { n: "3", title: "הורידו", desc: "קבלו שני קבצים נפרדים: ווקאל נקי ופלייבק מלא — מוכנים לאולפן." },
          ].map(({ n, title, desc }) => (
            <div key={n} className="text-center p-6 bg-white/3 rounded-2xl border border-white/5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B2FBE] to-[#C9A84C] flex items-center justify-center mx-auto mb-4 font-black text-xl">
                {n}
              </div>
              <h3 className="font-bold text-lg mb-2">{title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="px-6 pb-24 max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-4"
            style={{ fontFamily: '"Frank Ruhl Libre", serif' }}>
          קרדיטים ומחירים
        </h2>
        <p className="text-center text-white/40 mb-10">כל הפרדה עולה קרדיט אחד</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Starter", credits: 10,  price: "₪29",  desc: "מושלם להתנסות" },
            { label: "Pro",     credits: 50,  price: "₪99",  desc: "ליוצרים פעילים", featured: true },
            { label: "Studio",  credits: 200, price: "₪299", desc: "לאולפנים מקצועיים" },
          ].map(({ label, credits: c, price, desc, featured }) => (
            <div
              key={label}
              className={`p-6 rounded-2xl border text-center ${
                featured
                  ? "bg-gradient-to-b from-[#7B2FBE]/20 to-transparent border-[#7B2FBE]/40"
                  : "bg-white/3 border-white/10"
              }`}
            >
              {featured && (
                <span className="text-xs font-black uppercase tracking-widest text-[#C9A84C] block mb-3">
                  הכי פופולרי
                </span>
              )}
              <p className="font-black text-xl mb-1">{label}</p>
              <p className="text-4xl font-black my-3 gradient-text">{price}</p>
              <p className="text-white/40 text-sm mb-4">{c} קרדיטים</p>
              <p className="text-xs text-white/30">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Page-scoped styles */}
      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #9B4FDE, #C9A84C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .upload-zone {
          border: 2px dashed rgba(255,255,255,0.12);
          border-radius: 1.5rem;
          padding: 3rem 2rem;
          cursor: pointer;
          transition: all 0.2s;
          background: rgba(255,255,255,0.02);
          min-height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .upload-zone:hover, .upload-zone:focus-visible {
          border-color: #7B2FBE;
          background: rgba(123,47,190,0.06);
        }
        .upload-zone.dragging {
          border-color: #C9A84C;
          background: rgba(201,168,76,0.06);
          transform: scale(1.01);
        }
        .upload-zone.has-file {
          border-color: #7B2FBE;
          border-style: solid;
        }
        .stem-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 1.25rem;
          padding: 1.5rem;
          transition: border-color 0.2s;
        }
        .stem-card:hover { border-color: rgba(123,47,190,0.4); }
        .stem-icon-bg { background: rgba(123,47,190,0.15); }
        .submit-btn {
          background: linear-gradient(135deg, #7B2FBE, #9B4FDE);
          color: white;
          box-shadow: 0 8px 32px rgba(123,47,190,0.35);
        }
        .submit-btn:not(:disabled):hover {
          background: linear-gradient(135deg, #8B3FCE, #AB5FEE);
          box-shadow: 0 8px 40px rgba(123,47,190,0.5);
          transform: translateY(-1px);
        }
        .ltr { direction: ltr; }
      `}</style>
    </>
  );
}
