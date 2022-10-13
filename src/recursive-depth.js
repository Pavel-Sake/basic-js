const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth( arr ) {
    let counterD = 0
    const arrNumberDepth = []

    function culc (array) {
      if (Array.isArray(array)) {
        counterD++
        array.forEach((item, index) => {
          culc (item)

        })
        arrNumberDepth.push(counterD)
        counterD--
      } else {

      }
    }
    culc (arr)

    const res = Math.max(...arrNumberDepth)


    return res
  }
}

module.exports = {
  DepthCalculator
};
