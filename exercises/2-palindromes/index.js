/**determines whether or not a given string is a palindrome
 *@param {string} a given string
 * @returns {boolean} returns true if the text is palindrome.
 * 
 * @example
 * 
 * palindromes('racecar') // true
 * palindromes('tacos') // false
 */
const palindromes = text => (
x = [...text.matchAll(/\w/g)].join('').toLowerCase()) === x.split('').reverse().join('');

module.exports = palindromes;
