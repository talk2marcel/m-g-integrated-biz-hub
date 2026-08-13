import { Phone, Clock, MapPin } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

/**
 * Slim top notice bar component displaying business location, operating hours, and direct call contact.
 */
export function NoticeBar() {
  const primaryPhone = businessInfo.contact.primaryWhatsApp;
  
  return (
    <div className="bg-[var(--color-brand-slate)] text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        {/* Location & Hours Announcement */}
        <div className="flex items-center flex-wrap justify-center sm:justify-start gap-x-3 gap-y-1 text-center sm:text-left">
          <span className="inline-flex items-center gap-1 font-medium text-emerald-400">
            <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>Serving {businessInfo.location.town}, {businessInfo.location.city}</span>
          </span>
          <span className="hidden sm:inline text-slate-600" aria-hidden="true">|</span>
          <span className="inline-flex items-center gap-1 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
            <span>Mon–Sat: 8:00 AM–6:00 PM</span>
          </span>
        </div>

        {/* Quick Phone Call Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${primaryPhone}`}
            className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded-xs px-1"
            aria-label={`Call us at ${primaryPhone}`}
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
            <span>Call: {primaryPhone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NoticeBar;
