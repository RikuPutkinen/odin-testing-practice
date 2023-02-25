import { capitalize } from "./main";

test('Capitalize the string', () => {
  expect(capitalize("aBc")).toBe("Abc");
});