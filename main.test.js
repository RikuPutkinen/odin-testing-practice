import { capitalize, reverseString } from "./main";

test('Capitalize the string', () => {
  expect(capitalize("aBc")).toBe("Abc");
});

test('Reverse the string', () => {
  expect(reverseString("abc")).toBe("cba");
});