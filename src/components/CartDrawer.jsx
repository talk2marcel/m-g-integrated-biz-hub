import { useEffect } from 'react';
import { Minus, Plus, ShoppingBag, X, MessageCircle } from 'lucide-react';
import Button from './Button';

function formatPrice(value) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    return 'Price on Request';
  }

  return `₦${value.toLocaleString('en-NG')}`;
}

function CartDrawer({
  isOpen,
  items,
  subtotal,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
  onCheckout,
}) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-slate-900/40 transition-opacity duration-200 ${isOpen ? 'opacity-100 visible' : 'invisible opacity-0'}`}
        aria-hidden={!isOpen}
        onClick={onClose}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-slate-200 bg-white shadow-2xl transition-transform duration-200 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-[var(--color-brand-emerald)]">
              <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">Cart</p>
              <h2 className="text-lg font-bold text-[var(--color-brand-slate)]">Your order</h2>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-emerald)]"
            onClick={onClose}
            aria-label="Close shopping cart"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
              <ShoppingBag className="h-10 w-10 text-slate-400" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold text-[var(--color-brand-slate)]">Your cart is empty</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Add products to start a WhatsApp order request.
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-bold text-[var(--color-brand-slate)]">{item.name}</h3>
                      <p className="mt-1 text-xs uppercase tracking-[0.08em] text-slate-500">{item.category}</p>
                    </div>
                    <button
                      type="button"
                      className="rounded-sm text-xs font-semibold text-red-600 transition-colors hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                      onClick={() => onRemove(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      Remove
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-3">
                    <div className="flex items-center rounded-full border border-slate-200 bg-white">
                      <button
                        type="button"
                        className="inline-flex h-8 w-8 items-center justify-center text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-emerald)]"
                        onClick={() => onDecrease(item.id)}
                        aria-label={`Decrease quantity for ${item.name}`}
                      >
                        <Minus className="h-4 w-4" aria-hidden="true" />
                      </button>
                      <span className="min-w-8 text-center text-sm font-bold text-slate-700">{item.quantity}</span>
                      <button
                        type="button"
                        className="inline-flex h-8 w-8 items-center justify-center text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-emerald)]"
                        onClick={() => onIncrease(item.id)}
                        aria-label={`Increase quantity for ${item.name}`}
                      >
                        <Plus className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>

                    <span className="text-sm font-bold text-[var(--color-brand-slate)]">
                      {formatPrice(Number(item.price) || 0)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-slate-200 bg-slate-50 px-5 py-4">
          <div className="flex items-center justify-between text-sm text-slate-600">
            <span>Subtotal</span>
            <span className="text-lg font-bold text-[var(--color-brand-slate)]">{formatPrice(subtotal)}</span>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <Button
              type="button"
              variant="secondary"
              size="md"
              className="w-full"
              onClick={onCheckout}
              ariaLabel="Checkout with WhatsApp"
              disabled={items.length === 0}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Checkout via WhatsApp
            </Button>

            <Button
              type="button"
              variant="outline"
              size="md"
              className="w-full"
              onClick={onClose}
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default CartDrawer;
