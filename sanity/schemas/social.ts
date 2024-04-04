import { defineField, defineType } from 'sanity';

export const social = defineType({
    name: 'social',
    type: 'document',
    title: 'Socials',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Name',
            options: {
                list: [
                    { title: 'X', value: 'x' },
                    { title: 'Instagram', value: 'instagram' },
                    { title: 'GitHub', value: 'github' },
                ],
            },
        }),
        defineField({
            name: 'url',
            type: 'string',
            title: 'URL',
        }),
    ],
});
