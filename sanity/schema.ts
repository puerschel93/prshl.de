import { type SchemaTypeDefinition } from 'sanity';
import { content } from './schemas/content';
import { run } from './schemas/run';
import { social } from './schemas/social';

const schemaTypes = [run, social, content];

export const schema: { types: SchemaTypeDefinition[] } = {
	types: schemaTypes,
};

export default schemaTypes;
