# treeline-demo-utils

Small TypeScript utility library. Demo project for the TreeLine autonomous daemon.

## Commands
- `npm run build` — Compile TypeScript to dist/
- `npm run test` — Run vitest
- `npm run lint` — Type-check with tsc --noEmit

## Code Standards
- TypeScript strict mode. No `any`.
- Named exports only.
- Every exported function must have a JSDoc comment.
- Every function must have corresponding tests in a `.test.ts` file next to it.
- Keep functions pure where possible — no side effects.

## Structure
- `src/strings.ts` — String manipulation utilities
- `src/arrays.ts` — Array manipulation utilities
- `src/numbers.ts` — Numeric utilities
- `src/index.ts` — Re-exports all public functions
