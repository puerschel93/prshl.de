import { type SchemaTypeDefinition } from 'sanity';
import { runSchema as run } from './schemas/run';

const schemaTypes = [run];

export const schema: { types: SchemaTypeDefinition[] } = {
	types: schemaTypes,
};

export default schemaTypes;
