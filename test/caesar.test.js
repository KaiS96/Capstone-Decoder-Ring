// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  //Spaces should be maintained throughout, as should other nonalphabetic symbols
  it("Spaces should be maintained throughout, as should other nonalphabetic symbols", () => {
    const data = "This is a secret message!";

    const expected = "bpqa qa i amkzmb umaaiom!";
    const actual = caesar(data, 8);
    expect(actual).to.equal(expected);
  });
  //capital letters ignored
  it("capital letters ignored", () => {
    const data = "THIS is a secret message";

    const expected = "bpqa qa i amkzmb umaaiom";
    const actual = caesar(data, 8);
    expect(actual).to.equal(expected);
  });
  //if a letter is shifted so that it goes "off" the alphabet
  it("if a letter is shifted so that it goes off the alphabet", () => {
    const data = "zebras are cool";

    const expected = "cheudv duh frro";
    const actual = caesar(data, 3);
    expect(actual).to.equal(expected);
  });
  //if the shift value isn't present, equal to, less than -25, pr greater than 25, return false
  it("if the shift value isn't present, equal to, less than -25, pr greater than 25, return false", () => {
    const data = 99;

    const expected = false;
    const actual = caesar("This is cool", data);
  });
});
