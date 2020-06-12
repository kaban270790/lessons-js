/**
 *
 * @param {string} string
 * @param {string} char
 * @returns {number}
 */
const countChar = (string, char) => {
    char = char.toLowerCase();
    return string.toLowerCase().split('').filter(symbol => symbol === char).length;
};

module.exports = countChar;