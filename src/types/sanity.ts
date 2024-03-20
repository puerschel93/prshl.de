import type { InferSchemaValues } from "@sanity-typed/types";
import { config } from "sanity/schema";

export type SanityValues = InferSchemaValues<typeof config>;
