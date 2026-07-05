export function SignalVisual() {
  return (
    <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface p-4 shadow-[var(--shadow-soft)] md:p-5">
      <div className="mb-4 flex items-center justify-between gap-3 text-xs text-text-secondary">
        <span className="font-medium uppercase text-accent">Signal Space</span>
        <span>Abstract model</span>
      </div>
      <svg
        aria-hidden="true"
        viewBox="0 0 560 420"
        className="block aspect-[4/3] w-full max-w-full"
        fill="none"
      >
        <defs>
          <pattern
            id="signal-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              stroke="var(--border)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width="560" height="420" rx="24" fill="var(--elevated)" />
        <rect width="560" height="420" rx="24" fill="url(#signal-grid)" />

        <path
          d="M58 280 C118 198 166 198 226 280 S334 362 394 280 502 198 536 238"
          stroke="color-mix(in srgb, var(--accent) 76%, transparent)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M58 224 C116 166 174 166 232 224 S348 282 406 224 504 166 536 198"
          stroke="color-mix(in srgb, var(--accent) 34%, transparent)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M80 316 H506"
          stroke="color-mix(in srgb, var(--text-secondary) 32%, transparent)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M104 74 V338"
          stroke="color-mix(in srgb, var(--text-secondary) 28%, transparent)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <g stroke="var(--accent)" strokeWidth="2">
          <path d="M132 134 L250 210 L386 112 L484 168" strokeLinecap="round" />
          <path
            className="signal-visual-pulse"
            d="M132 134 L250 210 L386 112 L484 168"
            strokeLinecap="round"
          />
        </g>

        {[
          [132, 134, "TX"],
          [250, 210, "GW"],
          [386, 112, "PHY"],
          [484, 168, "RX"],
        ].map(([cx, cy, label]) => (
          <g key={label}>
            <circle
              cx={cx}
              cy={cy}
              r="18"
              fill="var(--surface)"
              stroke="var(--accent)"
              strokeWidth="2"
            />
            <circle cx={cx} cy={cy} r="5" fill="var(--accent)" />
            <text
              x={cx}
              y={Number(cy) + 42}
              textAnchor="middle"
              fill="var(--text-secondary)"
              fontSize="13"
              fontFamily="var(--font-geist-mono)"
            >
              {label}
            </text>
          </g>
        ))}

        <g
          stroke="color-mix(in srgb, var(--accent) 54%, transparent)"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M132 91 C156 101 156 167 132 177" />
          <path d="M484 125 C508 135 508 201 484 211" />
        </g>
      </svg>
    </div>
  );
}
