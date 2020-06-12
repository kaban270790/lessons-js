/**
 *
 * @param {string} ip
 * @returns {boolean}
 */
const isValidIP = (ip) => validateLength(ip) && validateGroups(ip);
/**
 *
 * @param {string} ip
 * @returns {boolean}
 */
const validateLength = (ip) => ip.length > 0;
/**
 *
 * @param {string} ip
 * @returns {boolean}
 */
const validateGroups = (ip) => {
    const ipGroups = ip.split('.');
    return validateCountGroups(ipGroups) && ipGroups.every(validateValueGroups);
};
/**
 *
 * @param {string[]} ip
 * @returns {boolean}
 */
const validateCountGroups = (ip) => ip.length === 4;
/**
 *
 * @param {string} ipBlock
 * @returns {boolean}
 */
const validateValueGroups = (ipBlock) => /^[0-9]{1,3}$/.test(ipBlock) && ipBlock >= 0 && ipBlock <= 255 && (+ipBlock).toString() === ipBlock;

module.exports = isValidIP;