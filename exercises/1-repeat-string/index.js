/** repeats a string
 * 
 * @param {string} word - text to repeat
 * @param {number} num - number of times to repeat
 * @returns {string} repeated string
 *
 *@example
 *  const repeatString=('hey', 3); 
 * console.log(repeatString); //  'heyheyhey'
 * 
 */
const repeatString = function(word,num) {

    let result = "";
    for (i = 0; i < num; i++) {
        result += word;
    }
    if (num < 0 )
    { return "ERROR";
}else {
    return  result; 
}
    
}


module.exports = repeatString
