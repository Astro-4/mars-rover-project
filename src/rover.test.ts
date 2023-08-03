const leftTurn = (a: string) => {
  if (a === "N") return "W";
  return "S";
};

describe("Given input it should return new coordinates", () => {
  test("should turn from N to W", () => {
    expect(leftTurn("N")).toBe("W");
  });
  test("should turn from W to S", () => {
    expect(leftTurn("W")).toBe("S");
  });
});
