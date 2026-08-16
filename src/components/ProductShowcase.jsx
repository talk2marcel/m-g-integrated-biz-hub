import { useMemo, useState } from 'react';
import {
  MonitorSmartphone,
  Smartphone,
  Leaf,
  Shirt,
  Package2,
  Search,
  ShoppingCart,
  SlidersHorizontal,
} from 'lucide-react';
import Button from './Button';
import SectionHeading from './SectionHeading';
import ProductCard from './ProductCard';
import CartDrawer from './CartDrawer';
import { useCart } from '../hooks/useCart';
import { products } from '../data/products';
import { getWhatsAppLink, PRIMARY_WHATSAPP_NUMBER } from '../utils/whatsapp';

const iconMap = {
  MonitorSmartphone,
  Smartphone,
  Leaf,
  Shirt,
  Package2,
};

function ProductShowcase() {
  const { items, itemCount, subtotal, addItem, removeItem, increaseQuantity, decreaseQuantity } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = useMemo(
    () => ['All', ...new Set(products.map((product) => product.category))],
    [],
  );

  const filteredProducts = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const haystack = [product.name, product.category, product.description].join(' ').toLowerCase();
      const matchesSearch = !normalizedQuery || haystack.includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const handleAddToCart = (product) => {
    addItem(product);
    setIsCartOpen(true);
  };

  const handleCheckout = () => {
    if (!items.length) {
      return;
    }

    const itemSummary = items
      .map((item) => `${item.name} x${item.quantity}`)
      .join(', ');
    const totalSummary = subtotal > 0 ? `₦${subtotal.toLocaleString('en-NG')}` : 'Price on Request';
    const message = `Hello M.&.G Integrated Biz Hub, I would like to order: ${itemSummary}. Total: ${totalSummary}. Please confirm product availability and delivery details.`;
    const checkoutUrl = getWhatsAppLink(message, PRIMARY_WHATSAPP_NUMBER);

    window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
    setIsCartOpen(false);
  };

  return (
    <section id="products" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badgeText="PRODUCTS & MERCHANDISE"
        title="Selected Products for Everyday Needs"
        subtitle="Explore some of the product categories available through M.&.G Integrated Biz Hub. Contact us to confirm current availability and pricing."
      />

      <div className="mt-8 flex flex-col gap-5">
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
          <label className="relative flex-1">
            <span className="sr-only">Search products</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search products or categories"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm text-[var(--color-brand-slate)] placeholder:text-slate-400 focus:border-[var(--color-brand-emerald)] focus:outline-none focus:ring-2 focus:ring-emerald-100"
              aria-label="Search products"
            />
          </label>

          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
              <SlidersHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
              Filter
            </span>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-emerald)] ${
                  activeCategory === category
                    ? 'bg-[var(--color-brand-emerald)] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <p className="text-sm text-slate-600">
            Showing <span className="font-semibold text-[var(--color-brand-slate)]">{filteredProducts.length}</span> product{filteredProducts.length === 1 ? '' : 's'}
          </p>

          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => setIsCartOpen(true)}
            ariaLabel="Open shopping cart"
            className="relative"
          >
            <ShoppingCart className="h-4 w-4" aria-hidden="true" />
            Cart
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--color-brand-gold)] px-1 text-[10px] font-bold text-white">
                {itemCount}
              </span>
            )}
          </Button>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
            <p className="text-lg font-bold text-[var(--color-brand-slate)]">No products match your search.</p>
            <p className="mt-2 text-sm text-slate-600">Try another search term or switch to a different category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                icon={iconMap[product.iconName] || Package2}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
      </div>

      <CartDrawer
        isOpen={isCartOpen}
        items={items}
        subtotal={subtotal}
        onClose={() => setIsCartOpen(false)}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemove={removeItem}
        onCheckout={handleCheckout}
      />
    </section>
  );
}

export default ProductShowcase;
