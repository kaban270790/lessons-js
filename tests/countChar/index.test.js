const {describe, it} = require("mocha");
const {assert} = require("chai");
const countChar = require('../../countChar');

describe('should count number of occurences', function () {
    it("fizzbuzz", () => {
        assert.equal(countChar("fizzbuzz", "z"), 4);
    });
    it("Fancy fifth fly aloof", () => {
        assert.equal(countChar("Fancy fifth fly aloof","f"), 5);
    });
});