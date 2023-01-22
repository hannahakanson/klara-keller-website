import {defineField, defineType} from 'sanity'

export default defineType({
  name: "heroContent",
  title: "Hero Content",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "side",
      title: "Side",
      type: "string",
      validation: (Rule) => Rule.max(1),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "songs",
      title: "Songs",
      type: "array",
      of: [{ type: "song" }],
      validation: (Rule) => Rule.unique().required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
  },
});
