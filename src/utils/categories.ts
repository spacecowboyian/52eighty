import type { CaseStudyCategory } from '../types/sanity';

/** Human labels for 52Eighty's portfolio taxonomy (the CMS stores slugs). */
export const CATEGORY_LABELS: Record<CaseStudyCategory, string> = {
  branding: 'Branding',
  'marketing-campaigns': 'Marketing campaigns',
  video: 'Video',
  'social-digital': 'Social & digital',
};

export function categoryLabel(category: string | undefined): string {
  return (category && CATEGORY_LABELS[category as CaseStudyCategory]) || category || 'Case study';
}
