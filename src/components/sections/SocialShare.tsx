"use client";

import { useState, useEffect } from "react";
import {
  IconWhatsApp,
  IconFacebook,
  IconLink,
  IconCheck,
} from "@/components/icons";
import { SectionWrapper } from "./_shared";
import { triggerHaptic } from "@/lib/haptic";

interface SocialShareProps {
  url?: string;
  title?: string;
}

export default function SocialShare({
  url: urlProp,
  title = "יקיר כהן הפקות",
}: SocialShareProps) {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setUrl(urlProp ?? window.location.href);
  }, [urlProp]);

  const waShare = `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`;
  const fbShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

  async function copyLink() {
    triggerHaptic();
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* silent fail */
    }
  }

  return (
    <SectionWrapper pad="p-8">
      <div className="flex items-center gap-3.5 flex-wrap">
        <span className="text-[13px] font-extrabold text-zinc-700">
          נהנים? שתפו:
        </span>

        <a
          href={waShare}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="שתף בוואטסאפ"
          className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-lg px-3.5 py-2 font-sans text-xs font-bold text-[#25D366] hover:border-zinc-400 transition-colors no-underline"
        >
          <IconWhatsApp size={15} />
          WhatsApp
        </a>

        <a
          href={fbShare}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="שתף בפייסבוק"
          className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-lg px-3.5 py-2 font-sans text-xs font-bold text-[#1877F2] hover:border-zinc-400 transition-colors no-underline"
        >
          <IconFacebook size={15} />
          Facebook
        </a>

        <button
          type="button"
          onClick={copyLink}
          aria-label={copied ? "הקישור הועתק בהצלחה" : "העתק קישור לדף"}
          className={`inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-lg px-3.5 py-2 font-sans text-xs font-bold transition-colors cursor-pointer ${
            copied
              ? "text-green-600 border-green-200"
              : "text-zinc-700 hover:border-zinc-400"
          }`}
        >
          {copied ? (
            <>
              <IconCheck size={14} />
              הועתק!
            </>
          ) : (
            <>
              <IconLink size={14} />
              העתק קישור
            </>
          )}
        </button>
      </div>
    </SectionWrapper>
  );
}
