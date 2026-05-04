"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu, X, ChevronDown, Crown,
  GraduationCap, Building2, Mic, Globe,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/useScrollDirection";

type NavChild  = { label: string; href: string };
type NavItem   = { label: string; href: string; children?: NavChild[] };
type MegaItem  = {
  Icon: LucideIcon;
  label: string;
  desc: string;
  href: string;
  iconClass: string;
};

/* ── Regular nav items (5 items — clean bar) ── */
const NAV_ITEMS: NavItem[] = [
  {
    label: "האולפן", href: "/studio",
    children: [
      { label: "הקלטת שירים",    href: "/studio/recording-song-modiin" },
      { label: "ברכות מקצועיות", href: "/studio/blessings"             },
      { label: "מחירון",          href: "/studio/pricing"               },
      { label: "הקלטה — ירושלים", href: "/studio/studio-jerusalem"      },
    ],
  },
  {
    label: "פודקאסט", href: "/podcast",
    children: [
      { label: "הפקת פודקאסט", href: "/podcast/podcast-production" },
      { label: "אולפן פודקאסט", href: "/podcast/podcast-studio"    },
      { label: "אולפן נייד",    href: "/podcast/mobile-studio"     },
    ],
  },
  {    label: "אונליין", href: "/online",
    children: [
      { label: "כל השירותים", href: "/online" },
      { label: "שיפור קול", href: "/online/vocal-fix" },
      { label: "פיצול ערוצים", href: "/online/vocal-fix/stem-split" },
    ],
  },
  {    label: "אירועים", href: "/attractions",
    children: [
      { label: "DJ לאירועים",   href: "/events/dj-events"          },
      { label: "DJ בעיר",       href: "/dj-events/cities"           },
      { label: "עמדת לד",       href: "/events/led-booth"           },
      { label: "אטרקציות",      href: "/attractions"                },
      { label: "מחשבון מחיר",   href: "/attractions#calculator"    },
    ],
  },
  {
    label: "גמגום", href: "/stuttering",
    children: [
      { label: "השיטה",       href: "/stuttering#method"  },
      { label: "סיפורי הצלחה", href: "/stuttering#stories" },
    ],
  },
  {
    label: "בלוג", href: "/blog",
    children: [
      { label: "מוזיקה בחתונה", href: "/blog/magazine-wedding"       },
      { label: "שירים לחופה",   href: "/blog/wedding-songs-chuppah"  },
      { label: "טיפים לאולפן",  href: "/blog/Studio-Tips"            },
      { label: "הוצאה לאור",    href: "/blog/RECORDS"                 },
    ],
  },
  {
    label: "צור קשר", href: "/contact",
  },
];

/* ── Mega-menu: האקדמיה + עסקים ── */
const MORE_KEY = "__more__";

const MORE_ITEMS: MegaItem[] = [
  {
    Icon: GraduationCap,
    label: "האקדמיה",
    desc: "קורס DJ ולימודי סאונד",
    href: "/academy",
    iconClass: "bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white",
  },
  {
    Icon: Building2,
    label: "שירותים לעסקים",
    desc: "קריינות, פודקאסט, הגברה",
    href: "/business",
    iconClass: "bg-blue-50 text-blue-600 group-hover:bg-blue-500 group-hover:text-white",
  },
  {
    Icon: Mic,
    label: "קריינות מקצועית",
    desc: "IVR, תדמית, קורפורייט",
    href: "/business/professional-voiceover",
    iconClass: "bg-rose-50 text-rose-600 group-hover:bg-rose-500 group-hover:text-white",
  },
  {
    Icon: Globe,
    label: "ניהול סושיאל",
    desc: "Facebook, Instagram, TikTok",
    href: "/business/social-media-management",
    iconClass: "bg-violet-50 text-violet-600 group-hover:bg-violet-500 group-hover:text-white",
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen]               = useState(false);
  const [openDropdown, setOpenDropdown]   = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname() ?? "/";
  const navRef   = useRef<HTMLElement>(null);

  const { dir, scrolled } = useScrollDirection();

  /* Podcast context — subtle brand glow on nav */
  const isPodcast     = pathname.startsWith("/podcast");
  const isMoreActive  = MORE_ITEMS.some((m) => pathname.startsWith(m.href.split("#")[0]));

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node))
        setOpenDropdown(null);
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpenDropdown(null); setIsOpen(false); }
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  const isActive = (item: NavItem) => {
    if (pathname === item.href) return true;
    return item.children?.some((c) => pathname.startsWith(c.href.split("#")[0]));
  };

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed top-0 w-full z-50 h-20 flex items-center",
        /* Respect prefers-reduced-motion — disable slide for vestibular disorders */
        "motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in-out",
        /* Hide when scrolling down (reading), reveal when scrolling up or at top */
        dir === "down" && !isOpen ? "-translate-y-full" : "translate-y-0",
        scrolled
          ? "bg-white/92 backdrop-blur-xl shadow-sm border-b border-zinc-100"
          : "bg-white/70 backdrop-blur-md",
        /* Podcast glow — subtle brand red shadow at the bottom */
        isPodcast && "shadow-[0_3px_28px_0_rgba(212,43,43,0.10)]"
      )}
      aria-label="ניווט ראשי"
    >
      <div className="max-w-7xl mx-auto ps-6 pe-6 w-full flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="יקיר כהן הפקות - דף הבית">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-black text-xl">
            Y
          </div>
          <span className="font-serif font-black text-xl tracking-tight hidden sm:block leading-none">
            יקיר כהן הפקות
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <ul className="hidden lg:flex items-center gap-0.5 font-bold text-sm">

          {NAV_ITEMS.map((item) => (
            <li key={item.href} className="relative">
              {item.children ? (
                <>
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === item.href ? null : item.href)}
                    className={cn(
                      "flex items-center gap-1 ps-3 pe-3 py-2 rounded-md transition-colors",
                      isActive(item) ? "text-brand-red" : "text-zinc-700 hover:text-black",
                      /* Podcast item highlight ring */
                      isPodcast && item.href === "/podcast" &&
                        "ring-2 ring-[#D42B2B]/20 ring-offset-1"
                    )}
                    aria-expanded={openDropdown === item.href}
                    aria-haspopup="true"
                    aria-current={isActive(item) ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={13}
                      className={cn("transition-transform duration-150", openDropdown === item.href && "rotate-180")}
                      aria-hidden="true"
                    />
                  </button>

                  {openDropdown === item.href && (
                    /* Plain nav list — no listbox/option roles; those are for <select> patterns */
                    <div
                      className="absolute top-full start-0 mt-1.5 min-w-[210px] bg-white border border-zinc-200 rounded-xl shadow-lg py-2 z-50"
                    >
                      <Link
                        href={item.href}
                        className="block ps-4 pe-4 py-2 text-zinc-900 font-bold border-b border-zinc-100 mb-1 hover:bg-zinc-50"
                      >
                        כל ה{item.label}
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block ps-4 pe-4 py-2 text-zinc-600 font-medium hover:bg-zinc-50 hover:text-black"
                          aria-current={pathname === child.href ? "page" : undefined}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "block ps-3 pe-3 py-2 rounded-md",
                    pathname === item.href ? "text-brand-red" : "text-zinc-700 hover:text-black"
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}

          {/* ── "עוד" Mega-Menu ── */}
          <li className="relative">
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === MORE_KEY ? null : MORE_KEY)}
              className={cn(
                "flex items-center gap-1 ps-3 pe-3 py-2 rounded-md transition-colors",
                isMoreActive ? "text-brand-red" : "text-zinc-700 hover:text-black"
              )}
              aria-expanded={openDropdown === MORE_KEY}
              aria-haspopup="true"
            >
              <span>עוד</span>
              <ChevronDown
                size={13}
                className={cn("transition-transform duration-150", openDropdown === MORE_KEY && "rotate-180")}
                aria-hidden="true"
              />
            </button>

            {openDropdown === MORE_KEY && (
              <div
                className="absolute top-full start-0 mt-1.5 w-[400px] bg-white border border-zinc-200 rounded-2xl shadow-xl p-3 z-50"
                aria-label="שירותים נוספים"
              >
                <div className="grid grid-cols-2 gap-1.5">
                  {MORE_ITEMS.map(({ Icon, label, desc, href, iconClass }) => (
                    <Link
                      key={href}
                      href={href}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-50 transition-colors group"
                    >
                      <div className={cn(
                        "w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                        iconClass
                      )}>
                        <Icon size={17} aria-hidden="true" />
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-sm text-zinc-900 leading-tight">{label}</p>
                        <p className="text-xs text-zinc-400 leading-tight mt-0.5">{desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-2 pt-2.5 border-t border-zinc-100 flex justify-between px-1">
                  <Link href="/business" className="text-xs text-zinc-400 hover:text-[#D42B2B] transition-colors font-bold">
                    כל שירותי עסקים ←
                  </Link>
                  <Link href="/academy" className="text-xs text-zinc-400 hover:text-[#D42B2B] transition-colors font-bold">
                    כל האקדמיה ←
                  </Link>
                </div>
              </div>
            )}
          </li>
        </ul>

        {/* End cluster */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/vip"
            className={cn(
              "hidden sm:inline-flex items-center gap-1.5 ps-4 pe-4 py-2.5 rounded-md font-black text-sm",
              "bg-gradient-to-b from-amber-400 to-amber-600 text-zinc-900",
              "hover:from-amber-300 hover:to-amber-500",
              "shadow-sm border border-amber-700/20"
            )}
            aria-label="כניסה לפורטל VIP"
          >
            <Crown size={16} aria-hidden="true" />
            <span>פורטל VIP</span>
          </Link>

          <button
            type="button"
            className="lg:hidden p-2 text-zinc-900 rounded-md border border-zinc-200 hover:border-zinc-400"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute top-20 inset-inline-start-0 inset-inline-end-0 w-full bg-white border-b border-zinc-200 shadow-lg lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
        >
          <ul className="flex flex-col ps-4 pe-4 py-4 gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="border-b border-zinc-100">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setMobileExpanded(mobileExpanded === item.href ? null : item.href)}
                      className={cn(
                        "w-full flex items-center justify-between py-3 text-base font-bold",
                        isActive(item) ? "text-brand-red" : "text-zinc-900",
                        isPodcast && item.href === "/podcast" && "text-brand-red"
                      )}
                      aria-expanded={mobileExpanded === item.href}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={16}
                        className={cn(mobileExpanded === item.href && "rotate-180")}
                        aria-hidden="true"
                      />
                    </button>
                    {mobileExpanded === item.href && (
                      <ul className="pb-3 pe-2 ps-2 flex flex-col gap-1 border-s-2 border-brand-red/30 me-2">
                        <li>
                          <Link href={item.href} className="block py-2 ps-3 pe-3 text-sm font-bold text-zinc-900 hover:bg-zinc-50 rounded">
                            כל ה{item.label}
                          </Link>
                        </li>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block py-2 ps-3 pe-3 text-sm text-zinc-600 hover:bg-zinc-50 rounded"
                              aria-current={pathname === child.href ? "page" : undefined}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn("block py-3 text-base font-bold", pathname === item.href ? "text-brand-red" : "text-zinc-900")}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}

            {/* Mobile "עוד" accordion */}
            <li className="border-b border-zinc-100">
              <button
                type="button"
                onClick={() => setMobileExpanded(mobileExpanded === MORE_KEY ? null : MORE_KEY)}
                className={cn(
                  "w-full flex items-center justify-between py-3 text-base font-bold",
                  isMoreActive ? "text-brand-red" : "text-zinc-900"
                )}
                aria-expanded={mobileExpanded === MORE_KEY}
              >
                <span>עוד שירותים</span>
                <ChevronDown size={16} className={cn(mobileExpanded === MORE_KEY && "rotate-180")} aria-hidden="true" />
              </button>
              {mobileExpanded === MORE_KEY && (
                <div className="pb-3 pe-2 ps-2 flex flex-col gap-1 border-s-2 border-brand-red/30 me-2">
                  {MORE_ITEMS.map(({ Icon, label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className="flex items-center gap-3 py-2.5 ps-3 pe-3 text-sm text-zinc-600 hover:bg-zinc-50 rounded"
                    >
                      <Icon size={15} className="shrink-0 text-zinc-400" aria-hidden="true" />
                      <span>{label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {/* Mobile VIP — sticky at bottom */}
            <li className="pt-4">
              <Link
                href="/vip"
                className="flex items-center justify-center gap-2 py-3 rounded-md bg-gradient-to-b from-amber-400 to-amber-600 text-zinc-900 font-black"
              >
                <Crown size={18} aria-hidden="true" />
                <span>פורטל VIP</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
