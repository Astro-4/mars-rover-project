import { leftTurn, rightTurn } from "./rover";
describe("Given current direction it should turn to the correct direction", () => {
  test("should turn from N to W", () => {
    expect(leftTurn("N")).toBe("W");
  });
  test("should turn from W to S", () => {
    expect(leftTurn("W")).toBe("S");
  });
  test("should turn from S to E", () => {
    expect(leftTurn("S")).toBe("E");
  });
  test("should turn from E to N", () => {
    expect(leftTurn("E")).toBe("N");
  });
  test("should turn from N to E", () => {
    expect(rightTurn("N")).toBe("E");
  });
  test("should turn from E to S", () => {
    expect(rightTurn("E")).toBe("S");
  });
  test("should turn from S to W", () => {
    expect(rightTurn("S")).toBe("W");
  });
  test("should turn from W to N", () => {
    expect(rightTurn("W")).toBe("N");
  });
});
