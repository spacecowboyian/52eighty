import { colors } from '5280-design-system';

/**
 * Team guide — the illustrated team member who introduces each stage.
 * Resolved direction 2026-07-08: team guides, not a chatbot persona
 * (see `website-intake-flow.md` § "Resolved: Team Guides over chatbot").
 *
 * The illustrations themselves don't exist yet — that's still an open
 * design action item — so this renders an initial-disc placeholder in the
 * right position and size for the artwork to drop into later.
 */
export interface TeamGuideProps {
  name: string;
  role: string;
  line: string;
}

export function TeamGuide({ name, role, line }: TeamGuideProps) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('');

  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <div
        aria-hidden="true"
        style={{
          flex: '0 0 auto',
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: colors.pine,
          color: colors.lime,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--ui)',
          fontWeight: 700,
          fontSize: 15,
        }}
      >
        {initials}
      </div>
      <div>
        <p
          style={{
            margin: 0,
            fontFamily: 'var(--ui)',
            fontSize: 12,
            letterSpacing: '.1em',
            textTransform: 'uppercase',
            color: colors.muted,
          }}
        >
          {name} · {role}
        </p>
        <p
          style={{
            margin: '6px 0 0',
            fontFamily: 'var(--serif)',
            fontSize: 17,
            lineHeight: 1.45,
            color: colors.ink,
          }}
        >
          {line}
        </p>
      </div>
    </div>
  );
}
