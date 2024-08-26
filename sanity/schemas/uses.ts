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
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [{
        type: 'object',
        fields: [{
          name: 'name',
          type: 'string',
          title: 'Name',
        }, {
          name: 'description',
          type: 'string',
          title: 'Description',
        }
        ]
      }]
    })
  ]
});