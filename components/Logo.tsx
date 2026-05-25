type Props = {
  size?: number;
  withWordmark?: boolean;
  className?: string;
};

export default function Logo({ size = 40, withWordmark = true, className }: Props) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Логотип Экспансия"
      >
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#7C5CFF" />
          </linearGradient>
          <linearGradient id="g2" x1="100" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7C5CFF" />
            <stop offset="100%" stopColor="#00D4FF" />
          </linearGradient>
        </defs>

        {/* Outer ring — segmented */}
        <path d="M 50 6 A 44 44 0 0 1 94 50" stroke="url(#g1)" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M 6 50 A 44 44 0 0 1 36 11" stroke="url(#g2)" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.85" />
        <path d="M 50 94 A 44 44 0 0 1 14 67" stroke="url(#g1)" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.7" />

        {/* Middle ring */}
        <path d="M 50 22 A 28 28 0 0 1 78 50" stroke="url(#g2)" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 22 50 A 28 28 0 0 1 42 24" stroke="url(#g1)" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.8" />
        <path d="M 50 78 A 28 28 0 0 1 26 62" stroke="url(#g2)" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.65" />

        {/* Inner ring */}
        <circle cx="50" cy="50" r="13" stroke="url(#g1)" strokeWidth="4" fill="none" />

        {/* Center dot */}
        <circle cx="50" cy="50" r="4" fill="#00D4FF" />
      </svg>

      {withWordmark && (
        <span className="font-display text-[22px] font-bold leading-none tracking-tighter2 text-ink">
          Экс<span className="text-grad">п</span>ансия
        </span>
      )}
    </span>
  );
}
