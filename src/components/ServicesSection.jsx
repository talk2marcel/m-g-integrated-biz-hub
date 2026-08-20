import { useState } from 'react';
import {
  Cpu,
  Monitor,
  Sparkles,
  GraduationCap,
  CreditCard,
  Smartphone,
  Scissors,
  Wheat,
  ShoppingBag,
  PiggyBank,
  ExternalLink,
} from 'lucide-react';
import Badge from './Badge';
import Button from './Button';
import SectionHeading from './SectionHeading';
import { services } from '../data/services';
import { getWhatsAppLink } from '../utils/whatsapp';

const iconMap = {
  Cpu,
  Monitor,
  Sparkles,
  GraduationCap,
  CreditCard,
  Smartphone,
  Scissors,
  Wheat,
  ShoppingBag,
  PiggyBank,
};

const categoryVariantMap = {
  Technology: 'cyan',
  Learning: 'emerald',
  Financial: 'gold',
  Lifestyle: 'slate',
  Retail: 'emerald',
};

function ServicesSection() {
  const [imageErrors, setImageErrors] = useState({});
  const primaryWhatsAppUrl = getWhatsAppLink('Hello M.&.G Integrated Biz Hub, I would like to know more about your services.');

  return (
    <section id="services" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-8">
        <SectionHeading
          badgeText="WHAT WE OFFER"
          title="Services Designed Around Your Everyday Needs"
          subtitle="From technology and digital solutions to CBT practice, financial services, repairs, fashion and everyday products, M.&.G Integrated Biz Hub brings multiple services together in one convenient location."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.iconName] || ShoppingBag;
            const badgeVariant = categoryVariantMap[service.category] || 'emerald';
            const showImage = Boolean(service.image && !imageErrors[service.id]);

            return (
              <article
                key={service.id}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
              >
                {showImage ? (
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.imageAlt || service.title}
                      loading="lazy"
                      onError={() => setImageErrors((prev) => ({ ...prev, [service.id]: true }))}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-[var(--color-brand-emerald)] shadow-sm backdrop-blur-xs ring-1 ring-slate-200/50">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge variant={badgeVariant}>{service.category}</Badge>
                    </div>
                  </div>
                ) : (
                  <div className="p-5 pb-0 flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-[var(--color-brand-emerald)] ring-1 ring-emerald-100">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <Badge variant={badgeVariant}>{service.category}</Badge>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold tracking-tight text-[var(--color-brand-slate)]">{service.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-6 text-slate-600">{service.description}</p>

                  {service.ctaUrl && (
                    <div className="mt-auto pt-4">
                      <Button
                        href={service.ctaUrl}
                        variant="primary"
                        size="sm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center gap-1.5"
                      >
                        <span>{service.ctaText || 'Visit CoopSave'}</span>
                        <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                      </Button>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="flex justify-center pt-2">
          <Button href={primaryWhatsAppUrl} variant="whatsapp" size="md" target="_blank" rel="noopener noreferrer">
            Chat with us on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
