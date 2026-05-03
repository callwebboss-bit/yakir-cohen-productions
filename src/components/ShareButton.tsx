"use client";

import { useState } from "react";
import { Share2, Check, Link as LinkIcon } from "lucide-react";
import { triggerHaptic } from "@/lib/haptic";

interface ShareButtonProps {
  /** Page title passed to navigator.share */
  title: string;
  /** Optional override for the share text body */
  text?: string;
  className?: string;
}

/**
 * Uses the native Web Share API if available (mobile, modern desktop).
 * Falls back to copying the URL to clipboard with visual feedback.
 */
export default function ShareButton({ title, text, className = "" }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    triggerHaptic();
    const url = typeof window !== "undefined" ? window.location.href : "";
    const shareText = text ?? `בדקו את זה אצל יקיר כהן הפקות: ${title}`;

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text: shareText, url });
      } catch {
        /* user cancelled — no-op */
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      } catch {
        /* clipboard blocked — silent fail */
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className={`inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-700 transition-colors ${className}`}
      aria-label="שתף עמוד זה"
    >
      {copied ? (
        <>
          <Check size={15} className="text-green-500" aria-hidden="true" />
          <span className="text-green-500 font-medium">הקישור הועתק!</span>
        </>
      ) : (
        <>
          {typeof navigator !== "undefined" && "share" in navigator
            ? <Share2 size={15} aria-hidden="true" />
            : <LinkIcon size={15} aria-hidden="true" />
          }
          <span>שתף פרויקט</span>
        </>
      )}
    </button>
  );
}
