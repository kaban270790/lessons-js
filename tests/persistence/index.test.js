const {describe, it} = require("mocha");
const {assert} = require("chai");
const persistence = require('../../persistence');

describe('persistence', function () {
    it("39", () => {
        assert.equal(persistence(39), 3);
    });
    it("4", () => {
        assert.equal(persistence(4), 0);
    });
    it("25", () => {
        assert.equal(persistence(25), 2);
    });
    it("999", () => {
        assert.equal(persistence(999), 4);
    });
});