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