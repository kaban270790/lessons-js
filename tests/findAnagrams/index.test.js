const {describe, it} = require("mocha");
const {assert} = require("chai");
const findAnagrams = require('../../findAnagrams');

describe('findAnagrams', function () {
    it("abba", () => {
        assert.deepEqual(findAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']).sort(), ['aabb', 'bbaa'].sort());
    });
    it("racer", () => {
        assert.deepEqual(findAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']).sort(), ['carer', 'racer'].sort());
    });
    it("laser", () => {
        assert.deepEqual(findAnagrams('laser', ['lazing', 'lazy', 'lacer']), []);
    });
});