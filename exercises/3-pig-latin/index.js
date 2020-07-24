/**Translates made-up children's language that's intended to be confusing
 *@param {string} a given string
 * @returns {string} returns the translated word.
 * 
 * @example
 *
 const word1 = "apple";
 const translate1 = translate(word1);
 console.log(translate1); //appleay
 *
 */
let VOWELS = ['a', 'e', 'i', 'o', 'u'];

function translate(message) {
  return message.split(' ').map(translateWord).join(' ');
}

function translateWord(word) {
  for(var i = 0; i < word.length; i++) {
    if(VOWELS.indexOf(word[i]) !== -1) break;
    if(word.slice(i, i+2) === 'qu') i += 1;
  };
  return word.slice(i) + word.slice(0, i) + 'ay';
}


module.exports = translate;

