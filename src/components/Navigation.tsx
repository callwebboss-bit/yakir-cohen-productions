"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

/* ──────────────────────────────────────────────────────────────
   NAV HIERARCHY - SEO-optimized, Hebrew-first
   Each parent owns a topic cluster for keyword authority
   ────────────────────────────────────────────────────────────── */
type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const NAV_ITEMS: NavItem[] = [
  {
    label: "האולפן",
    href: "/studio",
    children: [
      { label: "סאונד", href: "/studio#sound" },
      { label: "הפקה", href: "/studio#production" },
      { label: "חבילות", href: "/studio#packages" },
    ],
  },
  {
    label: "אירועים",
    href: "/attractions",
    children: [
      { label: "DJ לאירועים", href: "/attractions#dj" },
      { label: "אטרקציות", href: "/attractions#effects" },
      { label: "מחשבון מחיר", href: "/attractions#calculator" },
    ],
  },
  {
    label: "האקדמיה",
    href: "/academy",
    children: [
      { label: "קורס DJ", href: "/academy#dj-course" },
      { label: "לימודי סאונד", href: "/academy#sound-studies" },
    ],
  },
  {
    label: "גמגום",
    href: "/stuttering",
    children: [
      { label: "השיטה", href: "/stuttering#method" },
      { label: "סיפורי הצלחה", href: "/stuttering#stories" },
    ],
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  /* Sticky shadow on scroll - no animation */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  /* Close mobile menu on route change */
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
        scrolled
          ? "bg-white/92 backdrop-blur-xl shadow-sm border-b border-zinc-100"
          : "bg-white/70 backdrop-blur-md"
      )}
      aria-label="ניווט ראשי"
    >
      <div className="max-w-7xl mx-auto ps-6 pe-6 w-full flex items-center justify-between gap-4">

        {/* Logo - anchored to inline-start (right in RTL) */}
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="יקיר כהן הפקות - דף הבית">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-black text-xl">
            Y
          </div>
          <span className="font-serif font-black text-xl tracking-tight hidden sm:block leading-none">
            יקיר כהן הפקות
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1 font-bold text-sm">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className="relative">
              {item.children ? (
                <>
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === item.href ? null : item.href)}
                    className={cn(
                      "flex items-center gap-1 ps-4 pe-4 py-2 rounded-md",
                      isActive(item) ? "text-brand-red" : "text-zinc-700 hover:text-black"
                    )}
                    aria-expanded={openDropdown === item.href}
                    aria-haspopup="true"
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={14} className={cn(openDropdown === item.href && "rotate-180")} aria-hidden="true" />
                  </button>

                  {/* Dropdown - static, no animation */}
                  {openDropdown === item.href && (
                    <div
                      className="absolute top-full start-0 mt-1 min-w-[200px] bg-white border border-zinc-200 rounded-lg shadow-lg py-2 z-50"
                      role="menu"
                    >
                      <Link
                        href={item.href}
                        className="block ps-4 pe-4 py-2 text-zinc-900 font-bold border-b border-zinc-100 mb-1 hover:bg-zinc-50"
                        role="menuitem"
                      >
                        כל ה{item.label}
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block ps-4 pe-4 py-2 text-zinc-600 font-medium hover:bg-zinc-50 hover:text-black"
                          role="menuitem"
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
                    "block ps-4 pe-4 py-2 rounded-md",
                    pathname === item.href ? "text-brand-red" : "text-zinc-700 hover:text-black"
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* End cluster - anchored to inline-end (left in RTL) */}
        <div className="flex items-center gap-2 shrink-0">

          {/* VIP Portal - highlighted, gold accent */}
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

          {/* Mobile menu toggle */}
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

      {/* Mobile Drawer - static reveal, no slide animations */}
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
                        isActive(item) ? "text-brand-red" : "text-zinc-900"
                      )}
                      aria-expanded={mobileExpanded === item.href}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={16} className={cn(mobileExpanded === item.href && "rotate-180")} aria-hidden="true" />
                    </button>
                    {mobileExpanded === item.href && (
                      <ul className="pb-3 pe-2 ps-2 flex flex-col gap-1 border-s-2 border-brand-red/30 me-2">
                        <li>
                          <Link
                            href={item.href}
                            className="block py-2 ps-3 pe-3 text-sm font-bold text-zinc-900 hover:bg-zinc-50 rounded"
                          >
                            כל ה{item.label}
                          </Link>
                        </li>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block py-2 ps-3 pe-3 text-sm text-zinc-600 hover:bg-zinc-50 rounded"
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
                    className={cn(
                      "block py-3 text-base font-bold",
                      pathname === item.href ? "text-brand-red" : "text-zinc-900"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}

            {/* Mobile VIP CTA */}
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
