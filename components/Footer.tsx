import React from "react";
import Link from "next/link";
import { Mail, Gift, Navigation as NavIcon, Instagram, Youtube } from "lucide-react";

/* ──────────────────────────────────────────────────────────────
   FOOTER - Lean, RTL-first, 5-item navigation
   per user spec: יצירת קשר | שוברים | Waze | אינסטגרם | יוטיוב
   ────────────────────────────────────────────────────────────── */

const WAZE_URL =
  "https://waze.com/ul?q=%D7%A2%D7%9E%D7%A7+%D7%90%D7%99%D7%99%D7%9C%D7%95%D7%9F+34+%D7%9E%D7%95%D7%93%D7%99%D7%A2%D7%99%D7%9F&navigate=yes";
const INSTAGRAM_URL = "https://www.instagram.com/yakircohenproductions/";
const YOUTUBE_URL = "https://www.youtube.com/@yakircohen";

type FooterLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
};

const FOOTER_LINKS: FooterLink[] = [
  { label: "יצירת קשר", href: "/contact", icon: <Mail size={16} aria-hidden="true" /> },
  { label: "שוברים", href: "/voucher", icon: <Gift size={16} aria-hidden="true" /> },
  { label: "ניווט Waze", href: WAZE_URL, icon: <NavIcon size={16} aria-hidden="true" />, external: true },
  { label: "אינסטגרם", href: INSTAGRAM_URL, icon: <Instagram size={16} aria-hidden="true" />, external: true },
  { label: "יוטיוב", href: YOUTUBE_URL, icon: <Youtube size={16} aria-hidden="true" />, external: true },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 ps-6 pe-6 py-14">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

        {/* Brand block */}
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-start">
          <Link href="/" className="font-serif font-black text-2xl text-zinc-900">
            יקיר כהן הפקות
          </Link>
          <p className="text-zinc-500 text-sm max-w-xs">
            אולפן הקלטות במודיעין. סאונד של חו"ל, חוויה אישית.
          </p>
          <p className="text-zinc-400 text-xs">
            © 2026 יקיר כהן הפקות
          </p>
        </div>

        {/* Links - 5 items, icon + label */}
        <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm font-bold">
          {FOOTER_LINKS.map((link) => {
            const props = link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <li key={link.href}>
                {link.external ? (
                  <a
                    href={link.href}
                    {...props}
                    className="flex items-center gap-1.5 text-zinc-700 hover:text-brand-red"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 text-zinc-700 hover:text-brand-red"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
