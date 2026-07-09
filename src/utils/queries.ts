import type { SanityCaseStudy, SanitySettings } from '../types/sanity';
import { sanityClient } from './sanityClient';

const CASE_STUDY_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  client,
  industry,
  category,
  summary,
  featured,
  date,
  coverImage { ..., asset-> },
  gallery[]{ ..., asset-> }[defined(asset)],
  body[] {
    ...,
    _type == "image" => { ..., asset-> }
  }
`;

export async function getAllCaseStudies(): Promise<SanityCaseStudy[]> {
  return sanityClient.fetch(
    `*[_type == "caseStudy"] | order(date desc) { ${CASE_STUDY_FIELDS} }`,
  );
}

export async function getFeaturedCaseStudies(): Promise<SanityCaseStudy[]> {
  return sanityClient.fetch(
    `*[_type == "caseStudy" && featured == true] | order(date desc) { ${CASE_STUDY_FIELDS} }`,
  );
}

export async function getCaseStudyBySlug(slug: string): Promise<SanityCaseStudy | null> {
  return sanityClient.fetch(
    `*[_type == "caseStudy" && slug.current == $slug][0] { ${CASE_STUDY_FIELDS} }`,
    { slug },
  );
}

export async function getAllCaseStudySlugs(): Promise<string[]> {
  const results: Array<{ slug: string }> = await sanityClient.fetch(
    `*[_type == "caseStudy"] { "slug": slug.current }`,
  );
  return results.map((r) => r.slug).filter(Boolean);
}

export async function getSiteSettings(): Promise<SanitySettings | null> {
  return sanityClient.fetch(
    `*[_type == "siteSettings"][0] {
      siteTitle,
      siteDescription,
      tagline,
      heroTitle,
      heroText,
      aboutText,
      phone,
      address,
      socialLinks
    }`,
  );
}
