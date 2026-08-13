/**
 * Small reusable status and category Badge component.
 */
export function Badge({
  children,
  variant = 'emerald',
  className = '',
}) {
  const variantStyles = {
    emerald: 'bg-emerald-50 text-[var(--color-brand-emerald)] border-emerald-200',
    slate: 'bg-slate-100 text-[var(--color-brand-slate)] border-slate-200',
    gold: 'bg-amber-50 text-[var(--color-brand-gold)] border-amber-200',
    cyan: 'bg-sky-50 text-[var(--color-brand-cyan)] border-sky-200',
    whatsapp: 'bg-emerald-50 text-emerald-700 border-emerald-300',
    outline: 'bg-transparent text-slate-600 border-slate-300',
  };

  const selectedVariant = variantStyles[variant] || variantStyles.emerald;

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 text-xs font-semibold rounded-full border ${selectedVariant} ${className}`.trim()}
    >
      {children}
    </span>
  );
}

export default Badge;
