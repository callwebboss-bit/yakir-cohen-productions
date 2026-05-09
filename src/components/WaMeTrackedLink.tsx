"use client";



import type { AnchorHTMLAttributes, ReactNode } from "react";

import { trackWaClick } from "@/lib/analytics";



type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {

  section: string;

  linkLabel?: string;

  children?: ReactNode;

};



/** קישור חיצוני ל-wa.me עם דיווח GA4 (כשקיים gtag). */

export default function WaMeTrackedLink({ section, linkLabel, onClick, children, ...rest }: Props) {

  return (

    <a

      {...rest}

      onClick={(e) => {

        trackWaClick(section, linkLabel);

        onClick?.(e);

      }}

    >

      {children}

    </a>

  );

}

