// Import the function to be tested
const { isPalindrome } = require('../utils');

// Test suite for isPalindrome function
describe('isPalindrome', () => {
  // Test for a known palindrome
  test('should return true for a palindrome word', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  // Test for a non-palindrome word
  test('should return false for a non-palindrome word', () => {
    expect(isPalindrome('car')).toBe(false);
  });

  // Test for a palindrome with mixed case letters
  test('should return true for a case-insensitive palindrome', () => {
    expect(isPalindrome('Madam')).toBe(true);
  });

  // Test for an empty string
  test('should return false for an empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  // Test for non-alphabetic characters (Bonus)
  test('should throw an error for non-alphabetic characters', () => {
    expect(() => isPalindrome('hello123')).toThrow('Input must contain only alphabetic characters');
  });

  // Test for non-string input (Bonus)
  test('should throw an error for non-string input', () => {
    expect(() => isPalindrome(123)).toThrow('Input must be a string');
  });
});
