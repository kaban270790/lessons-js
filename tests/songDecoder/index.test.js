const {describe, it} = require("mocha");
const {assert} = require("chai");
const songDecoder = require('../../songDecoder');

describe("songDecoder", function () {
    it("WUB should be replaced by 1 space", function () {
        assert.equal(songDecoder("AWUBBWUBC"), "A B C");
    });
    it("multiples WUB should be replaced by only 1 space", function () {
        assert.equal(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C");
    });
    it("heading or trailing spaces should be removed", function () {
        assert.equal(songDecoder("WUBAWUBBWUBCWUB"), "A B C");
    });
});