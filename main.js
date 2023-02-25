export function capitalize(str) {
  return [str[0].toUpperCase(), str.slice(1).toLowerCase()].join("");
}

export function reverseString(str) {
  return str.split("").reverse().join("");
}

export const calculator = {
  add: function(a, b) {
    return a + b;
  },

  subtract: function(a, b) {
    return a - b;
  },

  divide: function(a, b) {
    if (b === 0) throw new Error("Cannot divide with 0");
    return a / b;
  },

  multiply: function(a, b) {
    return a * b;
  }
}

export function caesarCipher(str, shiftFactor) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    let newCharCode;

    if (97 <= charCode && charCode <= 122) {
      newCharCode = (charCode + shiftFactor);
      if (newCharCode > 122) newCharCode -= 26;
    }
    else if (65 <= charCode && charCode <= 90) {
      newCharCode = (charCode + shiftFactor);
      if (newCharCode > 90) newCharCode -= 26;
    }
    else newCharCode = charCode;

    newStr += String.fromCharCode(newCharCode);
  }

  return newStr;
}