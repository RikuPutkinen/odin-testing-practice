import expect from "expect";
import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./main";

test('Capitalize the string', () => {
  expect(capitalize("aBc")).toBe("Abc");
});


test('Reverse the string', () => {
  expect(reverseString("abc")).toBe("cba");
});


test('Add numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('Subtract numbers', () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test('Divide numbers', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('Divide with zero', () => {
  expect(() => calculator.divide(10, 0)).toThrow(/^Cannot divide with 0$/);
});

test('Multiply numbers', () => {
  expect(calculator.multiply(5, 2)).toBe(10);
});


test('Caesar', () => {
  expect(caesarCipher("aBc,.-XyZ", 2)).toBe("cDe,.-ZaB");
})


test('Analyze', () => {
  expect(analyzeArray([1, 2, 3, 4])).toEqual({average: 2.5, min: 1, max: 4, length: 4})
})