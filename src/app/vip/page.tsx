import React from "react";
import { Metadata } from "next";
import VIPPortalContent from "@/components/VIPPortalContent";

export const metadata: Metadata = {
  title: "פורטל VIP",
  description: "אזור אישי ללקוחות האולפן - ניהול סשנים, הורדת קבצים ותשלומים.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function VIPPage() {
  return <VIPPortalContent />;
}
