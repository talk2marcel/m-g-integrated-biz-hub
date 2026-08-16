import { ShoppingCart, MessageCircleMore } from 'lucide-react';
import Button from './Button';
import { getWhatsAppLink, PRIMARY_WHATSAPP_NUMBER } from '../utils/whatsapp';

function ProductCard({ product, onAddToCart, icon: Icon }) {
  const priceLabel =
    typeof product.price === 'number' && Number.isFinite(product.price)
      ? `₦${product.price.toLocaleString('en-NG')}`
      : 'Price on Request';

  const availabilityLabel =
    product.available && typeof product.available === 'string'
      ? product.available
      : 'Availability may vary. Please confirm current stock with our team.';

  const inquiryMessage = `Hello M.&.G Integrated Biz Hub, I would like to enquire about ${product.name}. Please share current availability and any details for ordering.`;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-[var(--color-brand-emerald)] ring-1 ring-emerald-100">
          {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : <ShoppingCart className="h-5 w-5" aria-hidden="true" />}
        </div>
        <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--color-brand-emerald)]">
          {product.category}
        </span>
      </div>

      <h3 className="text-lg font-bold tracking-tight text-[var(--color-brand-slate)]">{product.name}</h3>
      <p className="mt-3 flex-1 text-[0.95rem] leading-6 text-slate-600">{product.description}</p>

      <div className="mt-5 space-y-3">
        <div className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-3 py-2">
          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Price</span>
          <span className="text-sm font-bold text-[var(--color-brand-slate)]">{priceLabel}</span>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-slate-500">Availability</p>
          <p className="mt-1 text-sm text-slate-700">{availabilityLabel}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <Button
          type="button"
          variant="primary"
          size="sm"
          onClick={() => onAddToCart(product)}
          ariaLabel={`Add ${product.name} to cart`}
          className="flex-1"
        >
          <ShoppingCart className="h-4 w-4" aria-hidden="true" />
          Add to Cart
        </Button>

        <Button
          href={getWhatsAppLink(inquiryMessage, PRIMARY_WHATSAPP_NUMBER)}
          variant="whatsapp"
          size="sm"
          target="_blank"
          rel="noopener noreferrer"
          ariaLabel={`Inquire about ${product.name} on WhatsApp`}
          className="flex-1"
        >
          <MessageCircleMore className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </Button>
      </div>
    </article>
  );
}

export default ProductCard;
