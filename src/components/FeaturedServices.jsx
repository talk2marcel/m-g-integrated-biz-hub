import { LaptopMinimalCheck, Sparkles } from 'lucide-react';
import Badge from './Badge';
import Button from './Button';
import SectionHeading from './SectionHeading';
import { getWhatsAppLink } from '../utils/whatsapp';

const featuredServices = [
  {
    id: 'cbt',
    name: 'JAMB & WAEC CBT Practice',
    description:
      'Prepare in a computer-based testing environment with practice sessions designed to help students become familiar with CBT examinations.',
    highlights: ['CBT practice environment', 'Computer-based exam preparation', 'JAMB/WAEC practice support'],
    accent: 'emerald',
    icon: LaptopMinimalCheck,
    buttonText: 'Enquire About CBT Practice',
    message:
      'Hello M.&.G Integrated Biz Hub, I would like to enquire about JAMB/WAEC CBT practice availability.',
  },
  {
    id: 'it-ai',
    name: 'IT, AI & Digital Solutions',
    description:
      'Practical technology support for individuals, students and businesses, including computer assistance, IT services and AI-related guidance.',
    highlights: ['Computer and software assistance', 'IT support', 'AI tools and digital guidance', 'Basic business technology support'],
    accent: 'cyan',
    icon: Sparkles,
    buttonText: 'Ask About IT & AI Services',
    message:
      'Hello M.&.G Integrated Biz Hub, I would like to enquire about your IT and AI services.',
  },
];

function FeaturedServices() {
  return (
    <section id="featured-services" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badgeText="FEATURED HIGHLIGHTS"
        title="Featured Services"
        subtitle="Two practical service areas that support learning, digital access, and everyday business needs."
      />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
        {featuredServices.map(({ id, name, description, highlights, accent, icon: Icon, buttonText, message }) => {
          const isEmerald = accent === 'emerald';
          const panelClasses = isEmerald
            ? 'border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-emerald-50'
            : 'border-sky-200 bg-gradient-to-br from-sky-50 via-white to-sky-50';
          const iconClasses = isEmerald
            ? 'bg-emerald-600 text-white ring-emerald-100'
            : 'bg-[var(--color-brand-cyan)] text-white ring-sky-100';
          const badgeVariant = isEmerald ? 'emerald' : 'cyan';

          return (
            <article key={id} className={`flex h-full flex-col rounded-2xl border p-6 shadow-sm ${panelClasses}`}>
              <div className="flex items-start justify-between gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${iconClasses}`}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <Badge variant={badgeVariant}>{isEmerald ? 'CBT Support' : 'Digital Support'}</Badge>
              </div>

              <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-[var(--color-brand-slate)]">{name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{description}</p>

              <ul className="mt-5 space-y-2.5">
                {highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-brand-emerald)]" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-2">
                <Button
                  href={getWhatsAppLink(message)}
                  variant={isEmerald ? 'primary' : 'secondary'}
                  size="md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  {buttonText}
                </Button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default FeaturedServices;
