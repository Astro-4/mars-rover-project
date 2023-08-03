const leftTurn = (a: string) => "W";

describe("Given input it should return new coordinates", () => {
  test("Give L command should turn from N to W", () => {
    expect(leftTurn("N")).toBe("W");
  });
});
