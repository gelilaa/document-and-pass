/** adds  every number between(and including) them
 * @param x {number} the first number
 * @param y {number} the second number
 * @returns the sum of x and y 
 * 
 * @example
 * const sumAll =(1, 4);
 * console.log(sumAll);//returns the sum of 1 + 2 + 3 + 4 which is 10
 *
 */
const sumAll = function(x,y) {

    if (x< 0 || y < 0) return "ERROR";

    if (typeof x !== "number" || typeof y !== "number") return "ERROR";

   if (x > y) {
      const temp = x;
      x = y;
      y = temp;
    }
    let sum = 0;
    for (let i = x; i <= y ; i++) {
      sum += i;
    }
    return sum;
}


module.exports = sumAll
