export const DEFAULT_FIELDS = [
  // identity
  "name",
  "version",
  "description",
  "author",
  "contributors",
  "homepage",
  "repository",
  "bugs",
  "funding",
  "keywords",
  "license",
  // module system
  "type",
  "exports",
  "main",
  "module",
  "types",
  // publish & runtime
  "files",
  "sideEffects",
  "engines",
  // tooling
  "scripts",
  "bin",
  // deps
  "dependencies",
  "devDependencies",
  "peerDependencies",
  "optionalDependencies",
] as const;
