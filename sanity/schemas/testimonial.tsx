import { defineType, defineField } from "sanity";

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      options: {
        list: ['Twitter', 'Email', 'Facebook', 'LinkedIn']
      }
    }),
    defineField({
      name: 'tweetUrl',
      title: 'Tweet URL',
      type: 'url',
      hidden: ({ document }) => document?.source !== 'Twitter'
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
      hidden: ({ document }) => document?.source !== 'Email'
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      rows: 3
    }),
  ]
})