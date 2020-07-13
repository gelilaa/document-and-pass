/**Fibonacci Series are list of numbers where everyone’s number is the sum of the previous consecutive numbers.
 * @param num  { number} initial fibonacci number
 * @returns {number} value of the fibonacci sequence.
 * 
 *  @example
 * fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
   fibonacci(6) // returns 8
 * 
 */
const fibonacci = (num) => {
    let x = 0;
    let y = 1;
    let temp = 1;
    if (num < 0) {
      temp = "OOPS";
    } else {
      for (let i = 0; i < num - 1; i++) {
        temp = x + y;
        x = y;
        y = temp;
      }
    }
    return temp;
  };

    
 



module.exports = fibonacci
