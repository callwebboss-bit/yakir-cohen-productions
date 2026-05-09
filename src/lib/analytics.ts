/** דיווח לאירועי GA4 כשקיים gtag — ללא זריקת שגיאה אם אין סקריפט */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackWaClick(section: string, label?: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "whatsapp_click", {
    event_category: "engagement",
    section,
    ...(label ? { link_label: label } : {}),
  });
}
