export function capitalize(str) {
  return [str[0].toUpperCase(), str.slice(1).toLowerCase()].join("");
}

export function reverseString(str) {
  return str.split("").reverse().join("");
}