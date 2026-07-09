export type CaseStudyCategory =
  | 'branding'
  | 'marketing-campaigns'
  | 'video'
  | 'social-digital';

export interface SanityCaseStudy {
  _id: string;
  title: string;
  slug: string;
  client?: string;
  industry?: string;
  category: CaseStudyCategory;
  summary?: string;
  coverImage?: unknown;
  gallery?: unknown[];
  body?: unknown[];
  featured: boolean;
  date?: string;
}

export interface SanitySettings {
  siteTitle: string;
  siteDescription?: string;
  tagline?: string;
  heroTitle?: string;
  heroText?: string;
  aboutText?: string;
  phone?: string;
  address?: string;
  socialLinks?: Array<{ platform: string; url: string }>;
}
