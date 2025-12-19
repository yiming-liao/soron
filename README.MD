<h1 align="center">Soron</h1>

<div align="center">

A tiny, opinionated CLI to sort `package.json` fields in a stable, human-first order.

</div>

<div align="center">

[![NPM version](https://img.shields.io/npm/v/soron?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/soron)
[![TypeScript](https://img.shields.io/badge/TypeScript-%E2%9C%94-blue?style=flat&colorA=000000&colorB=000000)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/npm/l/soron?style=flat&colorA=000000&colorB=000000)](LICENSE)

</div>

## Usage

```bash
npx soron
```

## Field Order

`soron` applies a fixed, opinionated order to top-level fields in `package.json`:

```ini
# Identity
name
version
description
author
homepage
repository
bugs
funding
keywords
license

# Module system
type
exports
main
module
types

# Publish & runtime
files
sideEffects
engines

# Tooling
scripts
bin

# Dependencies
dependencies
devDependencies
peerDependencies
optionalDependencies
```

_Any remaining fields not listed above are preserved and sorted alphabetically._

## Philosophy

- **Opinionated but stable**
- **Human-readable over tool-generated**
- **Maintainer-first, not ecosystem-driven**
