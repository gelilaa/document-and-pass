/**
 ** filters out all values that are strictly equal to value
 * returns a new array, does not modify removeFromArray
 * @param {number[]} item - the given numbers
 * @param {number} value - the number to remove
 * @returns {number[]} the filtered numbers
 * 
 * @example
 *
 * const removeFromArray=([1, 2, 3, 4], 3);
 * console.log(removeFromArray); // [1,2,4]
 *
 */
  const removeFromArray = function(item,...value) {
 
    for (let i = 0; i< value.length; i++) {
    for(let a = 0; a < item.length; a++)
        {if (value[i] === item[a]){
        item.splice(a,1);
    }
}

    }

    return item;
}


module.exports = removeFromArray
