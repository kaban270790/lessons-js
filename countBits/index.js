/**
 *
 * @param {number} number
 */
const countBits = (number) => {
    return number.toString(2).split('').filter(digit => Number(digit) === 1).length
};

module.exports = countBits;