/**
 *
 */
let findTheOldest = function (people) {  
    let now = new Date;
    let thisYear = now.getFullYear();
    return people.reduce((oldest, person) => {
      const age = person => (person.yearOfDeath || thisYear) - person.yearOfBirth;
      return age(person) > age(oldest) ? person : oldest;
    });

}

module.exports = findTheOldest;
