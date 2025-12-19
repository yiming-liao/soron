#!/usr/bin/env tsx

import type { Json } from "./types";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { sortPackageJson } from "./sort-package-json";

// Read package.json
const cwd = process.cwd();
const packageJsonPath = path.join(cwd, "package.json");
if (!fs.existsSync(packageJsonPath)) {
  console.error("❌ package.json not found in current directory");
  process.exit(1);
}
const raw = fs.readFileSync(packageJsonPath, "utf8");
let parsed: Json;
try {
  parsed = JSON.parse(raw) as Json;
} catch {
  console.error("❌ Invalid package.json");
  process.exit(1);
}

// Run sorting function
const sorted = sortPackageJson(parsed);

// Write package.json
fs.writeFileSync(
  packageJsonPath,
  JSON.stringify(sorted, null, 2) + "\n",
  "utf8",
);

console.log("✨ package.json sorted successfully");
