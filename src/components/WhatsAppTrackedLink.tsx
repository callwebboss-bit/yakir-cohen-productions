"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { trackWaClick } from "@/lib/analytics";

type Props = ComponentProps<typeof Link> & {
  section: string;
  linkLabel?: string;
};

export default function WhatsAppTrackedLink({ section, linkLabel, onClick, ...rest }: Props) {
  return (
    <Link
      {...rest}
      onClick={(e) => {
        trackWaClick(section, linkLabel ?? (typeof rest.children === "string" ? rest.children : undefined));
        onClick?.(e);
      }}
    />
  );
}
