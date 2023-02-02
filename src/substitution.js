// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let alphabetRef = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    result = "";
    // your solution code here
    // inputAlphabet = input.toLowerCase();
    input = input.toLowerCase();
    // !alphabet.match(/\W/g)
    if (
      !alphabet ||
      alphabet.length !== 26 ||
      Array.from(new Set(alphabet)).length !== 26
    ) {
      return false;
    }

    // if(encode){
    // input
    // .match(/[a-z]|\W|\s/g)
    // .map(letter => alphabet[letter] || input).join('')
    // }
    // else if(!encode) {
    //   input
    //   .match(/[a-z]|\W|\s/g)
    //   .map(letter => alphabetRef[letter] || input).join('')
    // }
    // return input

    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        result += input[i];
      }
      if (encode) {
        if (alphabetRef.includes(input[i])) {
          let alphabetIndex = alphabetRef.indexOf(input[i]);
          result += alphabet[alphabetIndex];
        }
      } else if (!encode) {
        if (alphabet.includes(input[i])) {
          let alphabetIndex = alphabet.indexOf(input[i]);
          result += alphabetRef[alphabetIndex];
        }
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
