interface CornerProps {
  position: 'tl' | 'tr' | 'bl' | 'br'
  color?: string
}

// A single gold flourish, rotated per corner. This corner-frame motif
// echoes the ornamental gold backdrop from the invitation cover photo
// and repeats through the site as its visual signature.
export function OrnamentCorner({ position, color = '#C9A227' }: CornerProps) {
  const rotation: Record<CornerProps['position'], string> = {
    tl: 'rotate(0deg)',
    tr: 'rotate(90deg)',
    br: 'rotate(180deg)',
    bl: 'rotate(270deg)',
  }
  const placement: Record<CornerProps['position'], string> = {
    tl: 'top-3 left-3',
    tr: 'top-3 right-3',
    br: 'bottom-3 right-3',
    bl: 'bottom-3 left-3',
  }
  return (
    <svg
      viewBox="0 0 100 100"
      className={`ornament-corner ${placement[position]}`}
      style={{ transform: rotation[position] }}
    >
      <path
        d="M4 4 L4 34 M4 4 L34 4"
        stroke={color}
        strokeWidth="1.4"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M4 4 Q4 24 24 24 Q4 24 4 44"
        stroke={color}
        strokeWidth="1"
        fill="none"
        opacity="0.55"
      />
      <circle cx="4" cy="4" r="2.5" fill={color} opacity="0.8" />
      <path
        d="M10 10 Q22 10 22 22"
        stroke={color}
        strokeWidth="0.8"
        fill="none"
        opacity="0.4"
      />
    </svg>
  )
}

export function OrnamentFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <OrnamentCorner position="tl" />
      <OrnamentCorner position="tr" />
      <OrnamentCorner position="bl" />
      <OrnamentCorner position="br" />
      {children}
    </div>
  )
}

export function Divider({ label }: { label?: string }) {
  return (
    <div className="divider-flourish my-6">
      <span className="line" />
      {label ? (
        <span className="font-script italic text-gold-light text-sm tracking-wide">{label}</span>
      ) : (
        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
      )}
      <span className="line" />
    </div>
  )
}

// Circular D&P monogram seal — used in countdown & loading states
export function MonogramSeal({ size = 72, initials = 'D&P' }: { size?: number; initials?: string }) {
  return (
    <div
      className="rounded-full border border-gold flex items-center justify-center relative"
      style={{ width: size, height: size }}
    >
      <div
        className="absolute inset-1 rounded-full border border-gold/40"
        style={{ borderStyle: 'dashed' }}
      />
      <span className="font-display text-gold-light" style={{ fontSize: size * 0.32 }}>
        {initials}
      </span>
    </div>
  )
}
