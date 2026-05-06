import { IconWhatsApp } from '@/components/icons';
import { waHref } from './_shared';

interface FloatingButtonProps {
  message?: string;
}

export default function FloatingButton({
  message = 'היי, רוצה לדבר על הקלטה',
}: FloatingButtonProps) {
  return (
    <a
      href={waHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="פתח שיחת וואטסאפ"
      className="fixed bottom-5 right-5 w-[60px] h-[60px] rounded-full bg-[#25D366] text-white border-0 grid place-items-center z-50 shadow-[0_12px_24px_rgba(37,211,102,0.4)] animate-wa-pulse hover:bg-[#20c55a] transition-colors"
    >
      <IconWhatsApp size={28} />
    </a>
  );
}
