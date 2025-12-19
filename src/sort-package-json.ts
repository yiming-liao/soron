import { DEFAULT_FIELDS } from "./default-fields";
import type { Json } from "./types";

export function sortPackageJson(input: Json): Json {
  const ordered: Json = {};
  for (const key of DEFAULT_FIELDS) {
    if (key in input) ordered[key] = input[key];
  }
  // Rest keys
  const restKeys = Object.keys(input)
    .filter((key) => !(key in ordered))
    .sort();
  for (const key of restKeys) ordered[key] = input[key];
  return ordered;
}
