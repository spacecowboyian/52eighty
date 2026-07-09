import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
    }),

    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: "52Eighty's own portfolio taxonomy.",
      options: {
        list: [
          { title: 'Branding', value: 'branding' },
          { title: 'Marketing Campaigns', value: 'marketing-campaigns' },
          { title: 'Video', value: 'video' },
          { title: 'Social Media & Digital Strategy', value: 'social-digital' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alt text', type: 'string' }),
          ],
        },
      ],
    }),

    defineField({
      name: 'featured',
      title: 'Featured on homepage',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alt text', type: 'string' }),
            defineField({ name: 'caption', title: 'Caption', type: 'string' }),
          ],
        },
      ],
    }),
  ],

  orderings: [
    {
      title: 'Date, Newest First',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'coverImage',
    },
  },
});
