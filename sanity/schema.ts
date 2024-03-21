import { type SchemaTypeDefinition } from 'sanity';
import { run } from './schemas/run';
import { social } from './schemas/social';

const schemaTypes = [run, social];

export const schema: { types: SchemaTypeDefinition[] } = {
	types: schemaTypes,
};

export default schemaTypes;
