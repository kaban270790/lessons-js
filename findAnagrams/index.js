/**
 *
 * @param {string} word
 * @param {string[]} words
 * @returns {string[]}
 */
const findAnagrams = (word, words) => {
    const map = createWordMap(word);

    return words.filter((word) => checkMap(map, createWordMap(word)));
};
/**
 *
 * @param {string}word
 * @returns {{}}
 */
const createWordMap = (word) => {
    return word.split('').reduce((map, symbol) => {
        if (map[symbol]) {
            map[symbol]++;
        } else {
            map[symbol] = 1;
        }
        return map;
    }, {});
};
/**
 *
 * @param {{}} desired
 * @param {{}} compared
 * @returns {boolean}
 */
const checkMap = (desired, compared) => {
    try {
        Object.keys(compared).forEach((symbol) => {
            const cntSymbols = compared[symbol];
            if (desired[symbol]) {
                if (cntSymbols <= desired[symbol]) {
                    return;
                }
                throw new AreMissingSymbols();
            }
            throw new SymbolNotFound();
        });
    } catch (e) {
        if (e instanceof Anagram) {
            return false;
        }
        throw e;
    }
    return true;
};

class Anagram extends Error {

}

class SymbolNotFound extends Anagram {

}

class AreMissingSymbols extends Anagram {

}

module.exports = findAnagrams;