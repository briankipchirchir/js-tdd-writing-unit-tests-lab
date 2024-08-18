// Your code here
/**
 * Checks if a given string is a palindrome.
 * @param {string} word - The word to check.
 * @returns {boolean} - True if the word is a palindrome, false otherwise.
 */
function isPalindrome(word) {
    // Check if input is a string
    if (typeof word !== 'string') {
      throw new Error('Input must be a string');
    }
  
    // Check for empty string
    if (word.length === 0) {
      return false; // or throw new Error('Input cannot be an empty string');
    }
  
    // Check if input contains only alphabetic characters
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error('Input must contain only alphabetic characters');
    }
  
    // Convert to lowercase and check if it reads the same forwards and backwards
    const cleanedWord = word.toLowerCase();
    const reversedWord = cleanedWord.split('').reverse().join('');
    
    return cleanedWord === reversedWord;
  }
  
  // Export the function for testing
  module.exports = { isPalindrome };
  