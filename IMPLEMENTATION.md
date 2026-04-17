# treeline-demo-utils — Implementation Status

## Stack
- TypeScript 6.x, strict mode, ESM
- Vitest for testing
- No runtime dependencies

## Modules

### src/strings.ts (4 functions, 17 tests)
- `capitalize(s)` — Capitalize first letter
- `toKebabCase(s)` — Convert to kebab-case
- `truncate(s, maxLength)` — Truncate with ellipsis
- `slugify(s)` — Convert to URL-safe slug

### src/arrays.ts (3 functions, 13 tests)
- `unique(arr)` — Deduplicate preserving order
- `chunk(arr, size)` — Split into groups
- `groupBy(arr, keyFn)` — Group items by key function

### src/numbers.ts (2 functions, 15 tests)
- `clamp(n, min, max)` — Clamp between bounds
- `sum(arr)` — Sum array of numbers

### src/index.ts
Re-exports all public functions.

## Shipped Features
- feat: [TASK] Add unit tests for numbers.ts (clamp + sum) (#1) — 2026-04-17
- feat: [TASK] Add groupBy function to arrays module (#2) — 2026-04-17
- feat: [TASK] Add slugify function to strings module (#3) — 2026-04-17

## Known Gaps
- Missing useful utilities: `flatten`, `debounce`
- No CI pipeline
