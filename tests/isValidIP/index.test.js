const {describe, it} = require("mocha");
const {assert} = require("chai");
const isValidIP = require('../../isValidIP');

describe("Sample tests", () => {
    it("0.0.0.0", () => {
        assert.equal(isValidIP("0.0.0.0"), true);
    });
    it("12.255.56.1", () => {
        assert.equal(isValidIP("12.255.56.1"), true);
    });
    it("137.255.156.100", () => {
        assert.equal(isValidIP("137.255.156.100"), true);
    });
    it('empty string', () => {
        assert.equal(isValidIP(''), false);
    });
    it('abc.def.ghi.jkl', () => {
        assert.equal(isValidIP('abc.def.ghi.jkl'), false);
    });
    it('123.456.789.0', () => {
        assert.equal(isValidIP('123.456.789.0'), false);
    });
    it('12.34.56', () => {
        assert.equal(isValidIP('12.34.56'), false);
    });
    it('01.02.03.04', () => {
        assert.equal(isValidIP('01.02.03.04'), false);
    });
    it('256.1.2.3', () => {
        assert.equal(isValidIP('256.1.2.3'), false);
    });
    it('1.2.3.4.5', () => {
        assert.equal(isValidIP('1.2.3.4.5'), false);
    });
    it('123,45,67,89', () => {
        assert.equal(isValidIP('123,45,67,89'), false);
    });
    it('1e0.1e1.1e2.2e2', () => {
        assert.equal(isValidIP('1e0.1e1.1e2.2e2'), false);
    });
    it(' 1.2.3.4', () => {
        assert.equal(isValidIP(' 1.2.3.4'), false);
    });
    it('1.2.3.4 ', () => {
        assert.equal(isValidIP('1.2.3.4 '), false);
    });
    it('12.34.56.-7', () => {
        assert.equal(isValidIP('12.34.56.-7'), false);
    });
    it('1.2.3.4\n', () => {
        assert.equal(isValidIP('1.2.3.4\n'), false);
    });
    it('\n1.2.3.4', () => {
        assert.equal(isValidIP('\n1.2.3.4'), false);
    });
});