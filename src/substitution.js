// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    
    const checkForRepeats = new Set(alphabet);
    
    if (!alphabet || alphabet.length != 26 || [...checkForRepeats].length < 26) {
      return false;
    }
    
    let standardAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    
    let result = [];
    
    if (encode) {
      for (let i = 0; i < 26; i++) {
        result[standardAlphabet[i]] = alphabet[i];
      }
    } else {
      for (let i = 0; i < 26; i++) {
        result[alphabet[i]] = standardAlphabet[i];
      }
    }
    
    let answer = input.toLowerCase().split("").map((letter) => {
      if (letter === " ") {
        return " ";
      } else {
        return result[letter];
      }
    })
    
    return answer.join("")
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
