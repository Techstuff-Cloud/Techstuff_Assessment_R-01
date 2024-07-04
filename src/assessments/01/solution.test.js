import { maximizeProfit } from './solution';

describe('maximizeProfit', () => {
  test('should return correct profit for example case 1', () => {
    expect(maximizeProfit([7, 1, 5, 3, 6, 4])).toBe(7);
  });

  test('should return correct profit for example case 2', () => {
    expect(maximizeProfit([1, 2, 3, 4, 5])).toBe(4);
  });

  test('should return correct profit for example case 3', () => {
    expect(maximizeProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  test('should return correct profit for additional case with alternating high and low prices', () => {
    expect(maximizeProfit([10, 20, 10, 30, 5, 40])).toBe(65);
  });

  test('should return correct profit for additional case with small fluctuations', () => {
    expect(maximizeProfit([1, 2, 3, 0, 1, 2, 3])).toBe(5);
  });

  test('should return correct profit for additional case with large jumps', () => {
    expect(maximizeProfit([100, 180, 260, 310, 40, 535, 695])).toBe(865);
  });

  test('should return correct profit for single element array', () => {
    expect(maximizeProfit([1])).toBe(0);
  });

  test('should return correct profit for array with constant rising prices', () => {
    expect(maximizeProfit([1, 5, 3, 8, 12])).toBe(13);
  });

  test('should return correct profit for array with constant rising prices without dips', () => {
    expect(maximizeProfit([10, 20, 30, 40, 50])).toBe(40);
  });

  test('should return correct profit for array with constant falling prices', () => {
    expect(maximizeProfit([50, 40, 30, 20, 10])).toBe(0);
  });
});
