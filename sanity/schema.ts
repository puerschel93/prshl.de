import { type SchemaTypeDefinition } from 'sanity';
import { content } from './schemas/content';
import { run } from './schemas/run';
import { social } from './schemas/social';
import { uses } from './schemas/uses';

const schemaTypes = [run, social, content, uses];

export const schema: { types: SchemaTypeDefinition[] } = {
    types: schemaTypes,
};

export default schemaTypes;
