type Props = { className?: string; label?: string };

/** Hexagon "TPA" badge. Pure SVG so it is crisp at any size. */
export default function HexLogo({ className = "h-11 w-11", label = "TPA" }: Props) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="hexGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f1d68a" />
          <stop offset="0.45" stopColor="#d4aa3a" />
          <stop offset="1" stopColor="#8a6c1c" />
        </linearGradient>
      </defs>
      <polygon points="50,3 93,27 93,73 50,97 7,73 7,27" fill="#0d0d0a" stroke="url(#hexGold)" strokeWidth="3.5" />
      <polygon points="50,13 84,32 84,68 50,87 16,68 16,32" fill="none" stroke="#b5912a" strokeOpacity="0.45" strokeWidth="1" />
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fontFamily="var(--font-oswald), sans-serif"
        fontWeight="700"
        fontSize="26"
        letterSpacing="1"
        fill="url(#hexGold)"
      >
        {label}
      </text>
    </svg>
  );
}
