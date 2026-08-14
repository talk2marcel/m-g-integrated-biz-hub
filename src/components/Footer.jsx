import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

/**
 * Reusable Footer component displaying verified business details, contacts, and nav links.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-brand-slate)] text-white border-t-4 border-[var(--color-brand-gold)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Business Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-extrabold tracking-tight text-white">
              {businessInfo.name}
            </h3>
            <p className="text-sm text-slate-300 font-medium leading-relaxed">
              {businessInfo.tagline}
            </p>
            <div className="pt-2 text-xs text-amber-400 font-semibold">
              Kuje, Abuja, Nigeria
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {businessInfo.navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[var(--color-brand-gold)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-gold)] rounded-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[var(--color-brand-gold)] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Dafara+Junction,+Beside+Dafara+Mosque,+Kuje,+Abuja,+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-[var(--color-brand-gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-gold)] rounded-sm"
                >
                  {businessInfo.location.address}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[var(--color-brand-gold)] flex-shrink-0" aria-hidden="true" />
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  {businessInfo.contact.allPhones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="text-slate-300 hover:text-[var(--color-brand-gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-gold)] rounded-sm"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[var(--color-brand-gold)] flex-shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${businessInfo.contact.email.replace('&', '%26')}`}
                  className="text-slate-300 hover:text-[var(--color-brand-gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-gold)] rounded-sm"
                >
                  {businessInfo.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Business Hours */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Business Hours
            </h4>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[var(--color-brand-gold)] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-white">Mon – Sat:</p>
                  <p>8:00 AM – 6:00 PM</p>
                  <p className="font-semibold text-white mt-2">Sunday:</p>
                  <p className="text-slate-400">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center sm:text-left">
          <p>
            &copy; {currentYear} {businessInfo.name}. All rights reserved.
          </p>
          <p className="text-slate-500">
            Dafara Junction, Beside Dafara Mosque, Kuje, Abuja.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
