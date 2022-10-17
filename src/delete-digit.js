const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {

  const str = String(n)
  const arr = str.split("")
  const arrNumbers = []

  arr.forEach((item, index) => {

    const copyArr = [...arr]

    copyArr.splice(index, 1)

    const num = copyArr.join("")

    arrNumbers.push(+num)

  })

  const res = Math.max(...arrNumbers)



  return res
}

module.exports = {
  deleteDigit
};
