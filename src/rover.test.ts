import { leftTurn, rightTurn, move } from "./rover";

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
});

describe("", () => {
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
describe("Given current direction and coordinates should move in that direction", () => {
  test("should move once towards the direction", () => {
    expect(move("N", [0, 0])).toEqual("N 0 1");
  });
  test("should move once towards the direction", () => {
    expect(move("S", [0, 0])).toEqual("S 0 -1");
  });
  test("should move once towards the direction", () => {
    expect(move("E", [0, 0])).toEqual("E 1 0");
  });
  test("should move once towards the direction", () => {
    expect(move("W", [0, 0])).toEqual("S -1 0");
  });
});
