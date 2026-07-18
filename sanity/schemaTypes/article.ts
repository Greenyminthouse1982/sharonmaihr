import { defineField, defineType } from "sanity";

export const articleType = defineType({
  name: "article",
  title: "Articles",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "HR Knowledge", value: "hr-knowledge" },
          { title: "Labor Laws", value: "labor-laws" },
          { title: "Market Perspectives", value: "market-perspectives" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "description",
      title: "SEO Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(160),
    }),

    defineField({
      name: "image",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: "views",
      title: "Views",
      type: "number",
      initialValue: 0,
    }),

    defineField({
      name: "body",
      title: "Article Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
    },
  },
});
