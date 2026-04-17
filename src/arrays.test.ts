import { describe, it, expect } from 'vitest';
import { unique, chunk } from './arrays.js';

describe('unique', () => {
  it('removes duplicates', () => {
    expect(unique([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  it('preserves order', () => {
    expect(unique([3, 1, 2, 1])).toEqual([3, 1, 2]);
  });
});

describe('chunk', () => {
  it('splits into groups', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('returns empty array for empty input', () => {
    expect(chunk([], 3)).toEqual([]);
  });
});
