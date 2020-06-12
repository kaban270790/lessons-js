/**
 *
 * @param {number} num
 * @returns {number}
 */
const persistence = (num) => {
    let cnt = 0;
    while (num >= 10) {
        cnt++;
        num = num
            .toString()
            .split('')
            .reduce((sum, num) => {
                return sum * num;
            }, 1);
    }
    return cnt;
};

module.exports = persistence;