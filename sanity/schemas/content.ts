import { defineField, defineType } from 'sanity';

export const content = defineType({
	name: 'content',
	type: 'document',
	title: 'Content',
	fields: [
		defineField({
			name: 'type',
			title: 'Type',
			type: 'string',
			options: {
				list: [{ title: 'Caption', value: 'caption' }],
			},
		}),
		defineField({
			name: 'contentDescription',
			title: 'Content Description',
			type: 'array',
			of: [{ type: 'block' }],
		}),
	],
});
