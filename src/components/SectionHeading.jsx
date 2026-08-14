import Badge from './Badge';

/**
 * Reusable section title and subtitle component.
 */
export function SectionHeading({
  title,
  subtitle,
  badgeText,
  badgeVariant = 'emerald',
  centered = false,
  className = '',
}) {
  return (
    <div className={`space-y-2.5 ${centered ? 'text-center max-w-2xl mx-auto' : ''} ${className}`}>
      {badgeText && (
        <div>
          <Badge variant={badgeVariant}>{badgeText}</Badge>
        </div>
      )}
      {title && (
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--color-brand-slate)]">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-[0.95rem] sm:text-lg text-slate-600 leading-relaxed font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
