import { Navbar, type NavbarLink } from '5280-design-system';
import { useHeaderHeightVar } from './useHeaderHeightVar';
import { useHeaderTone, type HeaderTone } from './useHeaderTone';

/**
 * The sticky site header: glass over whatever field is beneath it, no
 * border, its ink/paper palette following that field's `data-header-tone`.
 * `initialTone` is what the page's first band is, so the server render is
 * already right and there's no flash before hydration.
 */
export interface SiteHeaderProps {
  links: NavbarLink[];
  contactHref: string;
  homeHref: string;
  initialTone?: HeaderTone;
}

export default function SiteHeader({ links, contactHref, homeHref, initialTone = 'light' }: SiteHeaderProps) {
  const tone = useHeaderTone(initialTone);
  useHeaderHeightVar();

  return (
    <header className="site-header" data-tone={tone}>
      <div className="container">
        <Navbar links={links} contactHref={contactHref} homeHref={homeHref} chrome="flush" tone={tone} />
      </div>
    </header>
  );
}
