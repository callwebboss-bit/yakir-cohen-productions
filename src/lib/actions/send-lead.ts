'use server';

export interface LeadPayload {
  name: string;
  phone: string;
  service: string;
  selections: string[];
  totalPrice: number;
  notes?: string;
}

export interface LeadResult {
  waUrl: string;
  success: boolean;
}

const YAKIR_PHONE = '972528701918';

export async function sendLead(payload: LeadPayload): Promise<LeadResult> {
  const message = buildMessage(payload);
  const waUrl = `https://wa.me/${YAKIR_PHONE}?text=${encodeURIComponent(message)}`;
  return { waUrl, success: true };
}

function buildMessage(p: LeadPayload): string {
  const priceFormatted = '₪' + p.totalPrice.toLocaleString('he-IL');

  const lines: string[] = [
    `שלום יקיר 🎶`,
    ``,
    `קיבלתי פניה חדשה דרך האתר:`,
    ``,
    `👤 שם: ${p.name}`,
    `📞 טלפון: ${p.phone}`,
    `🎯 שירות: ${p.service}`,
    `💰 סה"כ: ${priceFormatted} לפני מע"מ`,
    ``,
    `📋 הבחירות:`,
    ...p.selections.map((s) => `  • ${s}`),
  ];

  if (p.notes?.trim()) {
    lines.push(``, `📝 הערות: ${p.notes.trim()}`);
  }

  lines.push(``, `נשמח לשמוע ממך בהקדם 🙏`);

  return lines.join('\n');
}
