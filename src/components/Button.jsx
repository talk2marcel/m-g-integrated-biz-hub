/**
 * Reusable Button component with accessible focus states and Tailwind CSS variants.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  ariaLabel,
  target,
  rel,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'bg-[var(--color-brand-emerald)] text-white hover:bg-emerald-800 focus-visible:ring-[var(--color-brand-emerald)]',
    secondary: 'bg-[var(--color-brand-slate)] text-white hover:bg-slate-800 focus-visible:ring-[var(--color-brand-slate)]',
    outline: 'border-2 border-[var(--color-brand-slate)] text-[var(--color-brand-slate)] hover:bg-slate-100 focus-visible:ring-[var(--color-brand-slate)]',
    whatsapp: 'bg-[var(--color-whatsapp-green)] text-white hover:bg-emerald-600 focus-visible:ring-[var(--color-whatsapp-green)]',
    gold: 'bg-[var(--color-brand-gold)] text-white hover:bg-amber-700 focus-visible:ring-[var(--color-brand-gold)]',
    ghost: 'text-[var(--color-brand-slate)] hover:bg-slate-100 focus-visible:ring-slate-400',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-4 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2.5',
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${sizeStyles[size] || sizeStyles.md} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={onClick}
        aria-label={ariaLabel}
        target={target}
        rel={target === '_blank' ? rel || 'noopener noreferrer' : rel}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
