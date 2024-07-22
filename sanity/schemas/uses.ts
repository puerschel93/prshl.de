import { defineField, defineType } from "sanity";

export const uses = defineType({
  name: 'uses',
  type: 'document',
  fields: [
    defineField({
      name: 'index',
      type: 'number',
      title: 'Index'
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description'
    }),
  ]
});