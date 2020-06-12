/**
 *
 * @param {string} song
 * @returns {string}
 */
const songDecoder = (song) => {
    return song.split(/WUB/i).filter((symbol) => !!symbol).join(' ');
};

module.exports = songDecoder;