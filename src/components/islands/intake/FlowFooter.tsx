import { colors } from '5280-design-system';

/**
 * The two escape hatches: a plain form for the "doers", and a way back to the
 * work for anyone who loses interest. Shown at the foot of the opening screen —
 * the point where a visitor chooses which door to take.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function FlowFooter({ onDirect }: { onDirect: () => void }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 16,
        marginTop: 28,
        paddingTop: 18,
        borderTop: `1px solid ${colors.border}`,
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
          color: colors.pine,
          fontFamily: 'inherit',
          fontSize: 'inherit',
          textDecoration: 'underline',
        }}
      >
        Rather just send a message?
      </button>
      <a href={`${base}/work`} style={{ color: colors.muted }}>
        Or go look at the work →
      </a>
    </div>
  );
}
