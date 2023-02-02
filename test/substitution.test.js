// Write your tests here!
const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  //Input could include spaces and letters as well as special characters 
  it("Input could include spaces and letters as well as special characters ", () => {
    const data = "You are an excellent spy";

    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitution(data, "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });
  //Capital letters can be ignored
  it("capital letters can be ignored", () => {
    const data = "You are an excellent spy";

    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitution(data, "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });
  //Spaces should be maintained throughout
  it("Spaces should be maintained throughout", () => {
    const data = "You are an excellent spy"

    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitution(data, "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });
  //The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false
  it("The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false", () => {
    const data = "abcabcabcabcabcabcabcabcyz";

    const expected = false;
    const actual = substitution(data, false);
    expect(actual).to.equal(expected);
  });
  //All characters in the alphabet parameter must be unique. Otherwise, it should return false
  it("All characters in the alphabet parameter must be unique. Otherwise, it should return false", () => {
    const data = "abcabcabcabcabcabcabcabcyz";

    const expected = false;
    const actual = substitution(data, false);
    expect(actual).to.equal(expected);
  });
});
