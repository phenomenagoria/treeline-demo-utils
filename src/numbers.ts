/**
 * Clamp a number between min and max (inclusive).
 */
export function clamp(n: number, min: number, max: number): number {
  return Math.min(Math.max(n, min), max);
}

/**
 * Return the sum of an array of numbers.
 */
export function sum(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0);
}
