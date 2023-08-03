const leftTurn = (a: string) => {
  if (a === "N") return "W";
  if (a === "W") return "S";
  if (a === "S") return "E";
  return "N";
};

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
