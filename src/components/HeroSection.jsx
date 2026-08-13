import {
  MessageCircle,
  ArrowRight,
  MapPin,
  Clock,
  Laptop,
  GraduationCap,
  Building2,
  ShoppingBag,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { getWhatsAppLink } from '../utils/whatsapp';
import Button from './Button';
import Badge from './Badge';

/**
 * HeroSection component for Stage 3A.
 * Displays key business positioning, call-to-actions, location indicators, and a responsive abstract visual representation.
 */
export function HeroSection() {
  const whatsappUrl = getWhatsAppLink(
    'Hello M.&.G Integrated Biz Hub, I would like to inquire about your services.'
  );

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-10 sm:py-14 md:py-16 lg:py-20 border-b border-slate-200"
    >
      {/* Decorative CSS Background Glows */}
      <div
        className="pointer-events-none absolute -top-24 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <Badge variant="emerald">
                {businessInfo.name}
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-brand-slate)] leading-[1.18]">
              Technology, Learning &amp; Business Solutions in Kuje
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              IT and AI solutions, CBT practice, POS services, device repairs, fashion, farm products and everyday business needs — conveniently available from one local hub.
            </p>

            {/* Subtle Location & Availability Indicator */}
            <div className="inline-flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-700 bg-emerald-50/80 border border-emerald-200/90 rounded-xl px-3.5 py-2">
              <span className="inline-flex items-center gap-1.5 text-[var(--color-brand-emerald)]">
                <MapPin className="w-4 h-4 shrink-0 text-[var(--color-brand-emerald)]" aria-hidden="true" />
                <span>{businessInfo.location.landmark}, {businessInfo.location.town}, {businessInfo.location.city}</span>
              </span>
              <span className="hidden sm:inline text-slate-300" aria-hidden="true">•</span>
              <span className="inline-flex items-center gap-1.5 text-slate-600">
                <Clock className="w-4 h-4 shrink-0 text-slate-500" aria-hidden="true" />
                <span>Mon–Sat: 8:00 AM–6:00 PM</span>
              </span>
            </div>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <Button
                href="#services"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto shadow-sm"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </Button>
              
              <Button
                href={whatsappUrl}
                variant="whatsapp"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto shadow-sm"
                ariaLabel="Chat with M.&.G Integrated Biz Hub on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </Button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-[var(--color-brand-emerald)] shrink-0" aria-hidden="true" />
                <span>Trusted Local Business</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-brand-cyan)] shrink-0" aria-hidden="true" />
                <span>Verified Services</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Zap className="w-4 h-4 text-[var(--color-brand-gold)] shrink-0" aria-hidden="true" />
                <span>Fast &amp; Reliable</span>
              </div>
            </div>

          </div>

          {/* Right Column: Abstract CSS & SVG Visual Area (No stock images) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none p-6 sm:p-8 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
              
              {/* Geometric SVG Background Network */}
              <div className="absolute inset-0 opacity-15 pointer-events-none" aria-hidden="true">
                <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#0F172A" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#hero-grid)" />
                </svg>
              </div>

              {/* Header Badge in Graphic Composition */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-slate)]">
                    Multi-Sector Operations
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  Active Hub
                </span>
              </div>

              {/* 4 Interactive Visual Feature Cards */}
              <div className="mt-5 space-y-3.5 relative z-10">
                
                {/* Sector 1: Technology */}
                <div className="p-3.5 bg-slate-50/90 rounded-xl border border-slate-200 hover:border-sky-300 transition-colors flex items-center justify-between group shadow-2xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-sky-100 text-[var(--color-brand-cyan)] group-hover:scale-105 transition-transform">
                      <Laptop className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[var(--color-brand-slate)]">Technology &amp; AI</h4>
                      <p className="text-xs text-slate-500">IT Solutions, Repairs &amp; Prompt Engineering</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-1 rounded-md border border-sky-200 shrink-0">
                    Tech Hub
                  </span>
                </div>

                {/* Sector 2: Education / CBT */}
                <div className="p-3.5 bg-slate-50/90 rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors flex items-center justify-between group shadow-2xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-100 text-[var(--color-brand-emerald)] group-hover:scale-105 transition-transform">
                      <GraduationCap className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[var(--color-brand-slate)]">Learning &amp; CBT Practice</h4>
                      <p className="text-xs text-slate-500">JAMB, WAEC &amp; Computer Training</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200 shrink-0">
                    CBT Center
                  </span>
                </div>

                {/* Sector 3: Business & Financial Services */}
                <div className="p-3.5 bg-slate-50/90 rounded-xl border border-slate-200 hover:border-amber-300 transition-colors flex items-center justify-between group shadow-2xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-amber-100 text-[var(--color-brand-gold)] group-hover:scale-105 transition-transform">
                      <Building2 className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[var(--color-brand-slate)]">Business &amp; POS Services</h4>
                      <p className="text-xs text-slate-500">Agent Banking, Transfers &amp; Registrations</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-1 rounded-md border border-amber-200 shrink-0">
                    Financial POS
                  </span>
                </div>

                {/* Sector 4: Retail & Products */}
                <div className="p-3.5 bg-slate-50/90 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between group shadow-2xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-slate-200 text-[var(--color-brand-slate)] group-hover:scale-105 transition-transform">
                      <ShoppingBag className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[var(--color-brand-slate)]">Retail &amp; Merchandise</h4>
                      <p className="text-xs text-slate-500">Devices, Fashion &amp; Farm Products</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-1 rounded-md border border-slate-300 shrink-0">
                    Store
                  </span>
                </div>

              </div>

              {/* Bottom Decorative Footer of Card */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Dafara Junction, Beside Dafara Mosque</span>
                <span className="text-[var(--color-brand-emerald)] font-semibold">Kuje, Abuja</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
