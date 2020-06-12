const goodRowSum = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9;
/**
 * @param {number[][]} board
 * @returns {boolean}
 */
const validator = (board) => {
    try {
        validateLines(board);
        validateBlocks(board);
    } catch (e) {
        if (e instanceof ValidateError) {
            return false;
        }
        throw e;
    }
    return true;
};
/**
 * @param {number[][]} board
 * @returns {boolean}
 */
const validateBlocks = (board) => {
    for (let blockVerticalIndex = 0; blockVerticalIndex < 3; blockVerticalIndex++) {
        for (let blockHorizontalIndex = 0; blockHorizontalIndex < 3; blockHorizontalIndex++) {
            let rowSum = 0;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    rowSum += board[(blockVerticalIndex * 3) + i][(blockHorizontalIndex * 3) + j];
                }
            }
            if (rowSum !== goodRowSum) {
                throw new ValidateError(`Bad block. Block position ${blockVerticalIndex}:${blockHorizontalIndex}`);
            }
        }
    }
};
/**
 * @param {number[][]} board
 * @returns {boolean}
 */
const validateLines = (board) => {
    board.map((row, rowIndex) => {
        const rowSum = row.reduce((rowSum, number, colIndex) => {
            if (number > 9 || number < 1) {
                throw new ValidateError(`Bad number. The number can be from 1 to 9. Row ${rowIndex}. Column ${colIndex}`);
            }
            if (row.indexOf(number) !== colIndex) {
                throw new ValidateError(`Bad number. Has double in row. Row ${rowIndex}. Column ${colIndex}`);
            }
            board.forEach((row, index) => {
                if (rowIndex !== index && row[colIndex] === number) {
                    throw new ValidateError(`Bad number. Has double in col. Row ${index}. Column ${colIndex}`);
                }
            });
            return rowSum + number;
        }, 0);
        if (rowSum !== goodRowSum) {
            throw new ValidateError(`Bad row. Row ${rowIndex}`);
        }
    });
};

class ValidateError extends Error {

}

module.exports = validator;