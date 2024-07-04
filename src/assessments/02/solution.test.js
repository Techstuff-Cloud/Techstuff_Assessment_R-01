import { findLargestNumericalValue } from './solution';

describe('findLargestNumericalValue', () => {
  test('should return the string representing the largest numerical value', () => {
    const input = 'abc bcad aaef bac iaa';
    const output = 'bcad';
    expect(findLargestNumericalValue(input)).toBe(output);
  });

  test('should handle strings with the same numerical value', () => {
    const input = 'abc bac cab';
    const output = 'cab'; // The function should return the last string that has the max value
    expect(findLargestNumericalValue(input)).toBe(output);
  });

  test('should handle input with a single string', () => {
    const input = 'abc';
    const output = 'abc';
    expect(findLargestNumericalValue(input)).toBe(output);
  });

  test('should handle input with strings of different lengths', () => {
    const input = 'abc a ab bca';
    const output = 'bca';
    expect(findLargestNumericalValue(input)).toBe(output);
  });

  test('should handle input with all strings having the same character', () => {
    const input = 'aaa aaa aaa';
    const output = 'aaa';
    expect(findLargestNumericalValue(input)).toBe(output);
  });

  test('should return the largest value when numerical values are close', () => {
    const input = 'abc abd abe';
    const output = 'abe';
    expect(findLargestNumericalValue(input)).toBe(output);
  });
});
