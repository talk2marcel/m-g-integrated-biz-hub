import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

/**
 * Fixed floating action button for quick WhatsApp access.
 */
export function WhatsAppFAB() {
  const whatsappUrl = getWhatsAppLink('Hello M.&.G Integrated Biz Hub, I would like to make an inquiry.');

  return (
    <aside aria-label="Quick WhatsApp Contact Floating Button">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center justify-center p-3.5 bg-[var(--color-whatsapp-green)] text-white rounded-full shadow-lg hover:bg-emerald-600 hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-whatsapp-green)] group"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}

export default WhatsAppFAB;
