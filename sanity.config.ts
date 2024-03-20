import { InferSchemaValues } from '@sanity-typed/types';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';

const config = defineConfig({
	basePath: '/studio',
	projectId,
	dataset,
	schema,
	plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
});

export default config;

export type SanityValues = InferSchemaValues<typeof config>;
export type SanitySchema = typeof schema;
