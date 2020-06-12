const {describe, it} = require("mocha");
const {assert} = require("chai");
const countBits = require('../../countBits');

describe('countBits', function () {
    it('0', () => {
        assert.equal(countBits(0), 0);
    });
    it('4', () => {
        assert.equal(countBits(4), 1);
    });
    it('7', () => {
        assert.equal(countBits(7), 3);
    });
    it('9', () => {
        assert.equal(countBits(9), 2);
    });
    it('10', () => {
        assert.equal(countBits(10), 2);
    });
});