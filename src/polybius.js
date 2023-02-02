// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const encodeKey = {
    "a": "11",
    "b": "21",
    "c": "31",
    "d": "41",
    "e": "51",
    "f": "12",
    "g": "22",
    "h": "32",
    "i": "42",
    "j": "42",
    "k": "52",
    "l": "13",
    "m": "23",
    "n": "33",
    "o": "43",
    "p": "53",
    "q": "14",
    "r": "24",
    "s": "34",
    "t": "44",
    "u": "54",
    "v": "15",
    "w": "25",
    "x": "35",
    "y": "45",
    "z": "55",
    [" "]: " ",
  };

  const decodeKey = {
    "11": "a",
    "21": "b",
    "31": "c",
    "41": "d",
    "51": "e",
    "12": "f",
    "22": "g",
    "32": "h",
    "42": "(i/j)",
    "52": "k",
    "13": "l",
    "23": "m",
    "33": "n",
    "43": "o",
    "53": "p",
    "14": "q",
    "24": "r",
    "34": "s",
    "44": "t",
    "54": "u",
    "15": "v",
    "25": "w",
    "35": "x",
    "45": "y",
    "55": "z",
    " ": [" "],
  };
  // result = "";

  function polybius(input = "", encode = true) {
    // your solution code here
   //set input to lowercase
   input = input.toLowerCase()
   //if encode === true encodeKey/look through encodeKey; if encode === false decodeKey/look through decodeKey 
   // const encodeOrDecode = encode ? encodeKey : decodeKey;
   const encodeThis = encodeKey 
   const decodeThis = decodeKey

  
  if(encode){
    input.split(" ").length % 2 === 0
    return input
    // .match takes regex makes an array
    // [0-9] - digits 0-9| {2} - 2 digits(pairs)| [a-z] - chars a-z (lower case)| \s space| /g - global flag
    .match(/[0-9]{2}|[a-z]|\s/g)
    // join to turn back into a string
    .map(letter => encodeThis[letter] || letter).join('')
  }else if(!encode){
    if(input.replace(/\s/g, "").length % 2 !== 0)
    return false
  }
  // remove space 
    input.replace(/\s/g, "").length % 2 !== 0
    return input
    .match(/[0-9]{2}|[a-z]|\s/g)
    .map(letter => decodeThis[letter] || letter).join('')
    // input.split(" ").length % 2 === 0
    // return input
    // .match(/[0-9]{2}|[a-z]|\s/g)
    // .map(letter => encodeOrDecode[letter] || letter).join('')
}
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
