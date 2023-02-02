// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  //Only spaces and letters will be included
  it("Only spaces and letters will be included", () => {
    const data = "Hello world";

    const expected = "3251131343 2543241341";
    const actual = polybius(data);
    expect(actual).to.equal(expected);
  });
  //Capital letters can be ignored
  it("capital letters can be ignored", () => {
    const data = "Hello World";

    const expected = "3251131343 2543241341";
    const actual = polybius(data);
    expect(actual).to.equal(expected);
  });
  //When encoding, your output should still be a string
  it("When encoding, your output should still be a string", () => {
    const data = "thinkful";

    const expected = "4432423352125413";
    const actual = polybius(data);
    expect(actual).to.equal(expected);
  });
  //Spaces should be maintained throughout
  it("Spaces should be maintained throughout", () => {
    const data = "hello world hello world";

    const expected = "3251131343 2543241341 3251131343 2543241341";
    const actual = polybius(data);
    expect(actual).to.equal(expected);
  });
  //The letters I and J share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown
  it("The letters I and J share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown", () => {
    const data = "th(i/j)nkful";

    const expected = "443242423352125413";
    const actual = polybius(data);
    expect(actual).to.equal(expected);
  });
  //When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false
  it("When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false", () => {
    const data = "44324233521254134";

    const expected = false;
    const actual = polybius(data, false);
    expect(actual).to.equal(expected);
  });
});
