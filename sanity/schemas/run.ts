import { defineField, defineType } from 'sanity';

export const run = defineType({
    name: 'run',
    type: 'document',
    title: 'Runs',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Name',
        }),
        defineField({
            name: 'link',
            type: 'string',
            title: 'Link',
        }),
        defineField({
            name: 'date',
            type: 'date',
            title: 'Date',
        }),
        defineField({
            name: 'location',
            type: 'string',
            title: 'Location',
        }),
        defineField({
            name: 'distance',
            type: 'number',
            title: 'Distance',
        }),
        defineField({
            name: 'time',
            type: 'string',
            title: 'Time',
            placeholder: '00:00:00',
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image',
        }),
    ],
});
