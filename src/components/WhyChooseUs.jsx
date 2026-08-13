import { Layers3, MapPin, MonitorCog, ShoppingBag } from 'lucide-react';
import SectionHeading from './SectionHeading';

const reasons = [
  {
    title: 'Multiple Services, One Hub',
    description: 'Access technology, learning, business and everyday services from one convenient location.',
    icon: Layers3,
  },
  {
    title: 'Local & Convenient',
    description: 'Conveniently located at Dafara Junction beside Dafara Mosque in Kuje, Abuja.',
    icon: MapPin,
  },
  {
    title: 'Technology & Digital Solutions',
    description: 'Access IT support, AI guidance, computer services and other practical digital solutions.',
    icon: MonitorCog,
  },
  {
    title: 'Practical Everyday Services',
    description: 'From CBT practice and POS services to repairs, fashion, farm products and general merchandise.',
    icon: ShoppingBag,
  },
];

function WhyChooseUs() {
  return (
    <section id="why-us" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badgeText="WHY US"
        title="Why Choose M.&.G Integrated Biz Hub"
        subtitle="Practical convenience and access to everyday business support in Kuje, Abuja."
      />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
        {reasons.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-200 hover:border-emerald-200 hover:shadow-md"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-[var(--color-brand-emerald)] ring-1 ring-emerald-100">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>

            <h3 className="text-lg font-bold tracking-tight text-[var(--color-brand-slate)]">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
