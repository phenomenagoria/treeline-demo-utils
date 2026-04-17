import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { unique, chunk, groupBy } from './arrays.js';

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

describe('groupBy', () => {
  it('returns empty object for empty array', () => {
    expect(groupBy([], () => 'key')).toEqual({});
  });

  it('groups all items under a single key', () => {
    expect(groupBy([1, 2, 3], () => 'all')).toEqual({ all: [1, 2, 3] });
  });

  it('groups into multiple keys', () => {
    const result = groupBy([1, 2, 3, 4], (n) => (n % 2 === 0 ? 'even' : 'odd'));
    expect(result).toEqual({ odd: [1, 3], even: [2, 4] });
  });

  it('puts each item in its own group', () => {
    expect(groupBy(['a', 'b', 'c'], (s) => s)).toEqual({
      a: ['a'],
      b: ['b'],
      c: ['c'],
    });
  });

  it('preserves order within groups', () => {
    const result = groupBy([3, 1, 4, 1, 5, 9], (n) => (n % 2 === 0 ? 'even' : 'odd'));
    expect(result['odd']).toEqual([3, 1, 1, 5, 9]);
    expect(result['even']).toEqual([4]);
  });

  it('handles empty string as key', () => {
    expect(groupBy(['x'], () => '')).toEqual({ '': ['x'] });
  });

  it('property: total items across groups equals input length', () => {
    fc.assert(
      fc.property(fc.array(fc.integer()), (arr) => {
        const result = groupBy(arr, (n) => String(n % 3));
        const total = Object.values(result).reduce((sum, g) => sum + g.length, 0);
        return total === arr.length;
      }),
    );
  });

  it('property: every item appears in exactly one group', () => {
    fc.assert(
      fc.property(fc.array(fc.integer({ min: 0, max: 100 })), (arr) => {
        const keyFn = (n: number) => String(n % 5);
        const result = groupBy(arr, keyFn);
        const collected = Object.values(result).flat();
        return collected.length === arr.length;
      }),
    );
  });

  it('property: keys are subset of mapped values', () => {
    fc.assert(
      fc.property(fc.array(fc.integer()), (arr) => {
        const keyFn = (n: number) => String(n % 4);
        const result = groupBy(arr, keyFn);
        const possibleKeys = new Set(arr.map(keyFn));
        return Object.keys(result).every((k) => possibleKeys.has(k));
      }),
    );
  });
});
