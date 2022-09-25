const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date = false ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let res = ""

  if (!date) {
    return res = 'Unable to determine the time of year!';
  }


  if (typeof date === "object" && date.getMonth ) {

    const monthNumber = date.getMonth()
    const months = {
      winter: {
        name: "winter",
        monthsNumber: [0, 1, 11]
      },
      spring : {
        name: "spring",
        monthsNumber: [2, 3, 4]
      },
      summer : {
        name: "summer",
        monthsNumber: [5, 6, 7]
      },
      autumn  : {
        name: "autumn",
        monthsNumber: [8, 9, 10]
      }
    }
    Object.entries(months).forEach(([key, value]) => {

      if (value.monthsNumber.includes(monthNumber)) {

        res = value.name
      }
    })
  } else {
    throw new Error('Invalid date!');
  }




  return res


}

module.exports = {
  getSeason
};
