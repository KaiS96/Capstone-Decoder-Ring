// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  let lookup = 'abcdefghijklmnopqrstuvwxyz'

  function caesar(input="", shift, encode = true) {
    // your solution code here
    let result = ''
    if(shift === 0 || shift > 25 || shift < -25){
      return false
    }
    if(encode === false){
      shift *= -1
    } 
    let lowerCaseInput = input.toLowerCase()
    //look at each character in the string one by one and for each character
    for (let i = 0; i < lowerCaseInput.length; i++){
      let inputResult = ''
      //if the current character is in the alphabet, find the index of the current character in the lookup
      if(lookup.includes(lowerCaseInput[i])){
        inputResult += lowerCaseInput[i]
        inputResult = inputResult
      }
      //add the shift to that index
      if(inputResult && shift <= 25){
        let shiftedIndex = lookup.indexOf(inputResult) + shift
        if(shiftedIndex > 25){
          shiftedIndex -= 26
        }
        if(shiftedIndex < 0){
          shiftedIndex += 26
        }
        result += lookup[shiftedIndex]
      }
      if(!lookup.includes(lowerCaseInput[i]))
      result += lowerCaseInput[i]
    }
    return result
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
