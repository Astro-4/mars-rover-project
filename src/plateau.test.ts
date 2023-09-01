import { Plateau } from "../src/plateau";

describe("Plateau", () => {
  it("should create a plateau with the given dimensions", () => {
    const plateau = new Plateau(5, 5);
    expect(plateau.width).toBe(5);
    expect(plateau.height).toBe(5);
  });
});
