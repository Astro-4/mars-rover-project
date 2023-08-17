import { createPlateau } from "./plateau";

describe("Given current direction it return true for inputs between 0 and 5", () => {
  test("should return the axis for inputs between 0 and 5", () => {
    expect(createPlateau([0, 0])).toBe("0 0");
    expect(createPlateau([5, 5])).toBe("5 5");
    expect(createPlateau([1, 3])).toBe("1 3");
    expect(createPlateau([2, 4])).toBe("2 4");
  });
  test("should return undefined for inputs outside boundaries", () => {
    expect(createPlateau([-1, -1])).toBe(undefined);
    expect(createPlateau([6, 6])).toBe(undefined);
    expect(createPlateau([-1, 3])).toBe(undefined);
    expect(createPlateau([5, 6])).toBe(undefined);
  });
});
