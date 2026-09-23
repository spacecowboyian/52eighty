import type { CSSProperties } from 'react';
import { colors } from '../../tokens';
import burst from '../../assets/marks/starburst.svg?raw';
import heartRaw from '../../assets/marks/heart.svg?raw';

const BURST_VB = /viewBox="([^"]+)"/.exec(burst)?.[1] ?? '0 0 245.7 241.6';
const BURST_D = /d="([^"]+)"/.exec(burst)?.[1] ?? '';
const HEART_VB = /viewBox="([^"]+)"/.exec(heartRaw)?.[1] ?? '0 0 76.2 69.7';
const HEART_D = /d="([^"]+)"/.exec(heartRaw)?.[1] ?? '';

/**
 * The 16-point starburst from the guide (p7), optionally with the red heart
 * inside it — the "creative with a heartbeat" mark. `pulse` plays one 600ms
 * 1→1.06→1 beat on mount (`sc-pulse` in theme.css; the reduced-motion guard
 * collapses it).
 */
export interface StarburstProps {
  /** Size in px. */
  size?: number;
  /** Burst colour. Default lime. */
  color?: string;
  /** Show the heart inside. */
  heart?: boolean;
  /** Heart colour. Default red. */
  heartColor?: string;
  /** One beat on mount. */
  pulse?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function Starburst({
  size = 72,
  color = colors.lime,
  heart = false,
  heartColor = colors.red,
  pulse = false,
  className,
  style,
}: StarburstProps) {
  return (
    <span
      className={className}
      aria-hidden="true"
      style={{
        display: 'inline-grid',
        placeItems: 'center',
        width: size,
        height: size,
        lineHeight: 0,
        animation: pulse ? 'sc-pulse .6s cubic-bezier(.2,.7,.2,1) 1' : undefined,
        transformOrigin: 'center',
        ...style,
      }}
    >
      <svg viewBox={BURST_VB} width={size} height={size} style={{ gridArea: '1 / 1', display: 'block' }}>
        <path d={BURST_D} fill={color} />
      </svg>
      {heart && (
        <svg
          viewBox={HEART_VB}
          width={size * 0.36}
          height={size * 0.36}
          style={{ gridArea: '1 / 1', display: 'block', transform: 'translateY(2%)' }}
        >
          <path d={HEART_D} fill={heartColor} />
        </svg>
      )}
    </span>
  );
}
