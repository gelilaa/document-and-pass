/**
 * reverts a given string
 * @param {string} toReverse - text to revert
 * @returns {string} a reversed text
 *
 * @example
 * const reverseString ='hello there';
 * console.log (reverseString ()); // 'ereth olleh'
 */
const reverseString = (toReverse) => {
    let reversed = '';
      for (let i = toReverse.length - 1; i >= 0; i --) {
        reversed += toReverse[i];

} return reversed;

}
console.log (reverseString('hello there'));


module.exports = reverseString
