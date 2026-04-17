import { describe, it, expect } from 'vitest';
import { capitalize, toKebabCase, truncate } from './strings.js';

describe('capitalize', () => {
  it('capitalizes the first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('returns empty string for empty input', () => {
    expect(capitalize('')).toBe('');
  });
});

describe('toKebabCase', () => {
  it('converts camelCase', () => {
    expect(toKebabCase('helloWorld')).toBe('hello-world');
  });

  it('converts spaces', () => {
    expect(toKebabCase('hello world')).toBe('hello-world');
  });
});

describe('truncate', () => {
  it('returns string unchanged if within limit', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  it('truncates with ellipsis', () => {
    expect(truncate('hello world', 8)).toBe('hello...');
  });
});
