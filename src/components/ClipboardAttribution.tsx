"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const BASE_URL = "https://www.yakircohen.com";
const MIN_LENGTH = 30;

/**
 * Silently appends site attribution when a user copies more than 30 characters.
 * Works by intercepting the native `copy` event and rewriting the clipboard data.
 * Respects the original selection — only the extra attribution is added below.
 */
export default function ClipboardAttribution() {
  const pathname = usePathname() ?? "/";

  useEffect(() => {
    const handleCopy = (e: ClipboardEvent) => {
      const selected = window.getSelection()?.toString() ?? "";
      if (selected.length <= MIN_LENGTH || !e.clipboardData) return;

      const pageUrl = `${BASE_URL}${pathname}`;
      const attributed = `${selected}\n\nנשלח מאתר יקיר כהן הפקות: ${pageUrl}`;

      e.clipboardData.setData("text/plain", attributed);
      e.preventDefault();
    };

    document.addEventListener("copy", handleCopy);
    return () => document.removeEventListener("copy", handleCopy);
  }, [pathname]);

  return null;
}
