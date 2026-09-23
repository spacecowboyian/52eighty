import React from 'react';
import { colors, font, radius, ease, text } from '../../tokens';
import { useHover } from '../../utils/useHover';
import { Arch, archMedia } from '../Marks/Arch';
import { Pill } from '../Marks/Pill';
import type { BandTone } from '../Band/Band';

export type CardVariant = 'work' | 'caseStudy' | 'blog';

export interface CardProps {
  /** Which of the three card styles to render. */
  variant?: CardVariant;
  /** Small uppercase eyebrow label above the title. */
  eyebrow?: string;
  /** Card headline. */
  title?: string;
  /** Serif body copy / blurb. */
  blurb?: string;
  /** caseStudy only: the call-to-action text. */
  cta?: string;
  /** blog only: author + read-time meta line. */
  meta?: string;
  /** Heading level of the title — `h2` when the card is the page's first section under an h1. */
  titleAs?: 'h2' | 'h3';
  /** work only: the cover, shown in an Arch. Without one the Arch is a colour field. */
  image?: { src: string; srcSet?: string; sizes?: string; alt?: string };
  /** work only: the Arch's colour when there's no image (per-project tone). */
  imageTone?: BandTone;
}

/**
 * Cards are transparent on their ground — no shell, no border, no lift. The
 * hover is the image easing in inside its own clipped frame and the title's
 * underline turning from lime to pine.
 */
const titleBase: React.CSSProperties = {
  textDecoration: 'underline',
  textDecorationThickness: 2,
  textUnderlineOffset: 4,
  textDecorationColor: colors.lime,
  transition: `text-decoration-color .26s ${ease.out}`,
};
const titleHover: React.CSSProperties = { textDecorationColor: colors.pine };

export function Card({
  variant = 'work',
  eyebrow,
  title,
  blurb,
  cta = 'Read the story →',
  meta = 'Miles Ramsay · 5 min',
  titleAs: Title = 'h3',
  image,
  imageTone = 'sky',
}: CardProps) {
  const { isHovered, hoverProps } = useHover();

  // ----- Work card: image placeholder + eyebrow + title + serif blurb -----
  if (variant === 'work') {
    const eyebrowText = eyebrow ?? 'Brand Film';
    const titleText = title ?? 'The Long Way Home';
    const blurbText = blurb ?? 'A founder story that put feeling before features.';

    return (
      <div {...hoverProps} style={{ cursor: 'pointer' }}>
        <Arch tone={imageTone} ratio="4 / 5">
          {image && (
            <img
              src={image.src}
              srcSet={image.srcSet}
              sizes={image.sizes}
              alt={image.alt ?? ''}
              loading="lazy"
              decoding="async"
              style={{
                ...archMedia,
                transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                transition: `transform .5s ${ease.out}`,
              }}
            />
          )}
        </Arch>
        {/* The category sticker overlaps the arch's bottom edge. */}
        <div style={{ marginTop: -14, marginLeft: 12, position: 'relative', zIndex: 1 }}>
          <Pill tone="sky">{eyebrowText}</Pill>
        </div>
        <div style={{ padding: '14px 0 0' }}>
          <Title
            style={{
              ...text.title,
              margin: '0 0 7px',
              ...titleBase,
              ...(isHovered ? titleHover : {}),
            }}
          >
            {titleText}
          </Title>
          <p
            style={{
              fontFamily: font.serif,
              fontSize: 15,
              color: colors.muted,
              margin: 0,
              lineHeight: 1.45,
            }}
          >
            {blurbText}
          </p>
        </div>
      </div>
    );
  }

  // ----- Case-study card: pine card, lime eyebrow, big headline, CTA -----
  if (variant === 'caseStudy') {
    const eyebrowText = eyebrow ?? 'Case Study';
    const titleText = title ?? '+212% brand recall in one season.';
    const blurbText = blurb ?? 'How a regional nonprofit found its heartbeat.';

    const base: React.CSSProperties = {
      background: colors.pine,
      borderRadius: radius.lg,
      overflow: 'hidden',
      cursor: 'pointer',
      color: colors.paper,
    };

    return (
      <div {...hoverProps} style={base}>
        <div style={{ padding: '24px 22px' }}>
          <div
            style={{
              fontFamily: font.ui,
              fontSize: 11,
              letterSpacing: '.16em',
              textTransform: 'uppercase',
              color: colors.lime,
              marginBottom: 12,
            }}
          >
            {eyebrowText}
          </div>
          <Title
            style={{
              ...text.displayMD,
              fontSize: 26,
              margin: '0 0 10px',
            }}
          >
            {titleText}
          </Title>
          <p
            style={{
              fontFamily: font.serif,
              fontSize: 15,
              color: '#CFE2E0',
              margin: '0 0 18px',
              lineHeight: 1.45,
            }}
          >
            {blurbText}
          </p>
          <span
            style={{
              fontFamily: font.ui,
              fontWeight: 600,
              fontSize: 14,
              color: colors.lime,
              borderBottom: `2px solid ${isHovered ? colors.paper : colors.lime}`,
              transition: `border-color .26s ${ease.out}`,
              paddingBottom: 2,
            }}
          >
            {cta}
          </span>
        </div>
      </div>
    );
  }

  // ----- Blog card: avatar + author/time meta + Journal eyebrow + title + blurb -----
  const eyebrowText = eyebrow ?? 'Journal';
  const titleText = title ?? 'Why safe creative gets forgotten';
  const blurbText = blurb ?? 'The best ideas usually live outside the safest rooms.';

  return (
    <div {...hoverProps} style={{ cursor: 'pointer' }}>
      <div style={{ padding: 0 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 12,
          }}
        >
          <span
            style={{
              width: 30,
              height: 30,
              borderRadius: '50%',
              background: colors.blush,
            }}
          />
          <span
            style={{
              fontFamily: font.ui,
              fontSize: 12,
              color: colors.muted,
            }}
          >
            {meta}
          </span>
        </div>
        <div
          style={{
            fontFamily: font.ui,
            fontSize: 11,
            letterSpacing: '.16em',
            textTransform: 'uppercase',
            color: colors.peri,
            marginBottom: 7,
          }}
        >
          {eyebrowText}
        </div>
        <Title
          style={{
            ...text.title,
            margin: '0 0 7px',
            ...titleBase,
            ...(isHovered ? titleHover : {}),
          }}
        >
          {titleText}
        </Title>
        <p
          style={{
            fontFamily: font.serif,
            fontSize: 15,
            color: colors.muted,
            margin: 0,
            lineHeight: 1.45,
          }}
        >
          {blurbText}
        </p>
      </div>
    </div>
  );
}
