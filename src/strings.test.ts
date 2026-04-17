import { describe, it, expect } from 'vitest';
import { capitalize, toKebabCase, truncate, slugify } from './strings.js';

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

describe('slugify', () => {
  it('converts basic text to a slug', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('strips special characters', () => {
    expect(slugify('Hello, World! @#$')).toBe('hello-world');
  });

  it('replaces underscores with hyphens', () => {
    expect(slugify('foo_bar_baz')).toBe('foo-bar-baz');
  });

  it('collapses multiple spaces and hyphens', () => {
    expect(slugify('a   b---c')).toBe('a-b-c');
  });

  it('trims leading and trailing whitespace', () => {
    expect(slugify('  hello world  ')).toBe('hello-world');
  });

  it('strips unicode characters', () => {
    expect(slugify('Héllo Wörld')).toBe('hllo-wrld');
  });

  it('returns empty string for empty input', () => {
    expect(slugify('')).toBe('');
  });

  it('returns empty string for only special characters', () => {
    expect(slugify('!@#$%')).toBe('');
  });
});
