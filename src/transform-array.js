const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  const newArr = []
  const res = []
  let i = 0

  if (!Array.isArray(arr)) {

    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }

  const transformArr = {
    "--double-next": (newArr, index, arr) => {
      if (index !== arr.length) {
        newArr.push(arr[i + 1])
      }

    },
    "--double-prev": (newArr, index, arr) => {
      if (index !== 0) {
        const lastItem = newArr[newArr.length - 1]
        newArr.push(lastItem)
      }
    },
    '--discard-prev': (newArr, index, arr) => {
      if (index !== 0) {
        newArr.pop()
      }
    },
    '--discard-next': (newArr, index) => {
      if ((index !== arr.length)) {
        newArr.splice(index, 0,  "")
      }
      i++
    }
  }

  while (i < arr.length) {
    const currentItem = arr[i]

    if (transformArr[currentItem]) {
      transformArr[currentItem](newArr, i, arr)
    } else {
      newArr.push(currentItem)
    }
    i++
  }


  newArr.forEach((item) => {

    if (item !== "" && item !== undefined) {
      res.push(item)
    }
  })


  return res

}

module.exports = {
  transform
};
