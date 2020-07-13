/** leap years are divisible by 4 and 400 and not divisible by 100
 * @param year {number} the initial given year
 * @returns{ boolean} returns true if the year is leap year.Else returns false
 */
const leapYears = function (year) {
    if( year % 4 === 0 && ( year % 100 !== 0 || year % 400 == 0)){
       
        return true;
        
    } else{ 
        return false;}

}

module.exports = leapYears
