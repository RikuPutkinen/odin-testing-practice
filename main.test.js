import expect from "expect";
import { capitalize, reverseString, calculator } from "./main";

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