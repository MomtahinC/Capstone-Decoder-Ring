// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const polybiusSquare = {
      1: {1: 'a', 2:'b', 3:'c', 4:'d', 5:'e'},
      2: {1: 'f', 2:'g', 3:'h', 4:'(i/j)', 5:'k'},
      3: {1: 'l', 2:'m', 3:'n', 4:'o', 5:'p'},
      4: {1: 'q', 2:'r', 3:'s', 4:'t', 5:'u'},
      5: {1: 'v', 2:'w', 3:'x', 4:'y', 5:'z'}
    }
    
    input = input.toLowerCase().split("");
    let inputWithOutSpace = input.filter(index => index !=' ');
            
    let decodeString = "";
    const buildEncryption = [];

    if (!encode) {
      if (inputWithOutSpace.length % 2 != 0) return false;
      for (let i = 0; i < input.length; i+=2) {
        if (input[i] === " ") {
          decodeString += " ";
          i--;
        } else {
        decodeString += polybiusSquare[input[i+1]][input[i]];
        }
      }
      return decodeString;
    } else {
      for (let letter of input) {
        if (letter === " ") {
          buildEncryption.push(" ");
        }
        for (let c = 1; c < 6; c++) {
          for (let r = 1; r < 6; r++) {
            if (polybiusSquare[c][r].includes(letter)) {
              buildEncryption.push(`${r}${c}`);
            }
          }
        }
      }
    }
    return buildEncryption.join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
