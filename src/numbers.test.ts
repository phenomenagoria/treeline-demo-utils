import { describe, it, expect } from 'vitest';
import { clamp, sum } from './numbers.js';

describe('clamp', () => {
  it('returns value when within range', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it('clamps to min when below', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  it('clamps to max when above', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  it('returns min at min boundary', () => {
    expect(clamp(0, 0, 10)).toBe(0);
  });

  it('returns max at max boundary', () => {
    expect(clamp(10, 0, 10)).toBe(10);
  });

  it('returns the value when min equals max', () => {
    expect(clamp(5, 3, 3)).toBe(3);
  });
});

describe('sum', () => {
  it('sums a normal array', () => {
    expect(sum([1, 2, 3])).toBe(6);
  });

  it('returns 0 for empty array', () => {
    expect(sum([])).toBe(0);
  });

  it('returns the element for single-element array', () => {
    expect(sum([42])).toBe(42);
  });

  it('handles negative numbers', () => {
    expect(sum([-1, -2, 3])).toBe(0);
  });

  it('handles floating point numbers', () => {
    expect(sum([0.1, 0.2])).toBeCloseTo(0.3);
  });
});
