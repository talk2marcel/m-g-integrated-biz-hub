import {
  MonitorSmartphone,
  Smartphone,
  Leaf,
  Shirt,
  Package2,
} from 'lucide-react';
import Button from './Button';
import SectionHeading from './SectionHeading';
import { products } from '../data/products';
import { getWhatsAppLink } from '../utils/whatsapp';

const iconMap = {
  MonitorSmartphone,
  Smartphone,
  Leaf,
  Shirt,
  Package2,
};

function ProductShowcase() {
  return (
    <section id="products" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badgeText="PRODUCTS & MERCHANDISE"
        title="Selected Products for Everyday Needs"
        subtitle="Explore some of the product categories available through M.&.G Integrated Biz Hub. Contact us to confirm current availability and pricing."
      />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
        {products.map((product) => {
          const Icon = iconMap[product.iconName] || Package2;
          const message = `Hello M.&.G Integrated Biz Hub, I would like to ask about the current availability and pricing of ${product.name.toLowerCase()}.`;

          return (
            <article
              key={product.id}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-[var(--color-brand-emerald)] ring-1 ring-emerald-100">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--color-brand-gold)]">
                  Category
                </span>
              </div>

              <h3 className="text-lg font-bold tracking-tight text-[var(--color-brand-slate)]">{product.name}</h3>
              <p className="mt-3 flex-1 text-[0.95rem] leading-6 text-slate-600">{product.description}</p>

              <div className="mt-5">
                <Button
                  href={getWhatsAppLink(message)}
                  variant="whatsapp"
                  size="sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  ariaLabel={`Ask about availability for ${product.name}`}
                  className="w-full sm:w-auto"
                >
                  Ask About Availability
                </Button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ProductShowcase;
