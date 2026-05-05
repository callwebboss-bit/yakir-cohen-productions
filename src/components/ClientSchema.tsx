"use client";

import { SITE_URL } from "@/lib/site-url";
import { usePathname } from "next/navigation";
import StructuredData from "./StructuredData";

const BASE_URL = SITE_URL;
const PHONE = "+972587555456";
const EMAIL = "office@yakircohen.com";

const PATH_ENTITY: Record<string, string> = {
  "/studio":      "MusicRecordingStudio",
  "/attractions": "EntertainmentBusiness",
  "/events":      "EntertainmentBusiness",
  "/podcast":     "ProfessionalService",
  "/academy":     "EducationalOrganization",
  "/stuttering":  "MedicalClinic",
  "/clinic":      "MedicalClinic",
  "/business":    "ProfessionalService",
  "/online":      "ProfessionalService",
};

function resolveEntityType(pathname: string): string {
  for (const [prefix, type] of Object.entries(PATH_ENTITY)) {
    if (pathname === prefix || pathname.startsWith(prefix + "/")) return type;
  }
  return "ProfessionalService";
}

export default function ClientSchema() {
  const pathname = usePathname() ?? "/";
  const entityType = resolveEntityType(pathname);

  const schema = {
    "@context": "https://schema.org",
    "@type": entityType,
    "@id": `${BASE_URL}/#page-entity`,
    name: "יקיר כהן הפקות",
    url: `${BASE_URL}${pathname}`,
    telephone: PHONE,
    email: EMAIL,
    provider: { "@id": `${BASE_URL}/#organization` },
    description: "אולפן הקלטות פרמיום, קליניקה לקול והפקות מוסיקה לאירועים במודיעין ובמרכז.",
  };

  return <StructuredData data={schema} />;
}
