/** אייקוני אמצעי תשלום — SVG מקומי, בלי בקשות רשת */
function IconBit({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 24" width="48" height="24" aria-hidden="true">
      <rect width="48" height="24" rx="6" fill="#FF6B00" />
      <text x="24" y="16" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="800" fontFamily="system-ui, sans-serif">
        Bit
      </text>
    </svg>
  );
}

function IconPayBox({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 56 24" width="56" height="24" aria-hidden="true">
      <rect width="56" height="24" rx="6" fill="#0066CC" />
      <text x="28" y="16" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="800" fontFamily="system-ui, sans-serif">
        PayBox
      </text>
    </svg>
  );
}

function IconPayPal({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 24" width="64" height="24" aria-hidden="true">
      <rect width="64" height="24" rx="6" fill="#003087" />
      <text x="32" y="16" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" fontStyle="italic">
        PayPal
      </text>
    </svg>
  );
}

function IconVisa({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 24" width="48" height="24" aria-hidden="true">
      <rect width="48" height="24" rx="5" fill="#1A1F71" />
      <text x="24" y="16" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="800" fontFamily="Georgia, serif" letterSpacing="0.15em">
        VISA
      </text>
    </svg>
  );
}

function IconMastercard({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 24" width="40" height="24" aria-hidden="true">
      <rect width="40" height="24" rx="5" fill="#f8f8f8" stroke="#e4e4e7" />
      <circle cx="16" cy="12" r="7" fill="#EB001B" opacity="0.95" />
      <circle cx="24" cy="12" r="7" fill="#F79E1B" opacity="0.95" />
    </svg>
  );
}

function IconGPay({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 52 24" width="52" height="24" aria-hidden="true">
      <rect width="52" height="24" rx="6" fill="#f8f8f8" stroke="#e4e4e7" />
      <text x="26" y="16" textAnchor="middle" fill="#444" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">
        G Pay
      </text>
    </svg>
  );
}

function IconApplePay({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 72 24" width="72" height="24" aria-hidden="true">
      <rect width="72" height="24" rx="6" fill="#000" />
      <text x="36" y="16" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600" fontFamily="system-ui, sans-serif">
        Apple Pay
      </text>
    </svg>
  );
}

const METHODS = [
  { key: "bit", label: "Bit", Icon: IconBit },
  { key: "paybox", label: "PayBox", Icon: IconPayBox },
  { key: "paypal", label: "PayPal", Icon: IconPayPal },
  { key: "visa", label: "Visa", Icon: IconVisa },
  { key: "mc", label: "Mastercard", Icon: IconMastercard },
  { key: "gpay", label: "Google Pay", Icon: IconGPay },
  { key: "apple", label: "Apple Pay", Icon: IconApplePay },
] as const;

export default function PaymentMethodBadges() {
  return (
    <ul className="flex flex-wrap items-center gap-2" aria-label="אמצעי תשלום מקובלים">
      {METHODS.map(({ key, label, Icon }) => (
        <li key={key}>
          <span
            className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-1.5 py-1 shadow-sm"
            title={label}
          >
            <Icon className="block h-[22px] w-auto max-w-[4.75rem]" />
          </span>
          <span className="sr-only">{label}</span>
        </li>
      ))}
    </ul>
  );
}
