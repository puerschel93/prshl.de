import { type SchemaTypeDefinition } from "sanity";
import { runSchema } from "./schemas/run";

const schemaTypes = [runSchema];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
};

export default schemaTypes;
