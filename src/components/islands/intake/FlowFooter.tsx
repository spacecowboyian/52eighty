import { colors } from '5280-design-system';

/**
 * The two escape hatches: a plain form for the "doers", and a way back to the
 * work for anyone who loses interest. Shown at the foot of the opening screen —
 * the point where a visitor chooses which door to take.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** `onDark` recolors the links for a photo/scrim background instead of cream. */
export function FlowFooter({ onDirect, onDark = false }: { onDirect: () => void; onDark?: boolean }) {
  const linkColor = onDark ? 'rgba(255,255,255,.92)' : colors.pine;
  const mutedColor = onDark ? 'rgba(255,255,255,.7)' : colors.muted;
  const rule = onDark ? 'rgba(255,255,255,.28)' : colors.border;

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 16,
        marginTop: 28,
        paddingTop: 18,
        borderTop: `1px solid ${rule}`,
        fontFamily: 'var(--ui)',
        fontSize: 13,
      }}
    >
      <button
        type="button"
        onClick={onDirect}
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          color: linkColor,
          fontFamily: 'inherit',
          fontSize: 'inherit',
          textDecoration: 'underline',
        }}
      >
        Rather just send a message?
      </button>
      <a href={`${base}/work`} style={{ color: mutedColor }}>
        Or go look at the work →
      </a>
    </div>
  );
}
