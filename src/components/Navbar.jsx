import { useState } from 'react';
import { Menu, X, MessageCircle, ArrowUpRight } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';
import Button from './Button';
import NoticeBar from './NoticeBar';

/**
 * Responsive Navigation Header component with NoticeBar and sticky desktop/mobile navigation.
 */
export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const whatsappUrl = getWhatsAppLink('Hello M.&.G Integrated Biz Hub, I have an inquiry.');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#why-us' },
    { name: 'Products', href: '#products' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
  <header className="sticky top-0 z-50 w-full bg-white shadow-xs">
    {/* Slim Top Notice Bar */}
    <NoticeBar />

    {/* Full-Width Brand Banner */}
    <div className="w-full bg-white border-b border-slate-100">
      <a
        href="#hero"
        title="M.&.G Integrated Biz Hub"
        className="block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-emerald)]"
      >
       <div className="h-[110px] sm:h-[145px] lg:h-[170px] w-full overflow-hidden">
          <img
            src="/images/logo.png"
            alt="M.&.G Integrated Biz Hub"
            className="h-full w-full object-contain scale-110"
          />
        </div>
      </a>
    </div>

    {/* Main Navbar */}
      <nav className="border-b border-slate-200 bg-white/95 backdrop-blur-sm" aria-label="Main Navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 sm:h-14">
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[0.8rem] lg:text-sm font-semibold text-slate-700 hover:text-[var(--color-brand-emerald)] transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-emerald)] rounded-sm"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop WhatsApp Action */}
            <div className="hidden sm:flex items-center space-x-3">
              <Button
                href={whatsappUrl}
                variant="whatsapp"
                size="sm"
                target="_blank"
                rel="noopener noreferrer"
                ariaLabel="Chat with us on WhatsApp"
                className="whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>WhatsApp</span>
              </Button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg text-slate-700 hover:text-[var(--color-brand-emerald)] hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-emerald)] transition-colors"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4 px-4 space-y-3 bg-white shadow-lg">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-[var(--color-brand-emerald)] rounded-lg transition-colors flex items-center justify-between gap-3"
                >
                  <span className="truncate">{item.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100">
              <Button
                href={whatsappUrl}
                variant="whatsapp"
                size="md"
                className="w-full justify-center shadow-xs"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
              >
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
