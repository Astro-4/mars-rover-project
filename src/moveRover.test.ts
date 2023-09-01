// tests/roverControl.test.ts
import { moveRovers } from "../src/moveRover";
import { Plateau } from "../src/plateau";

describe("Rover Control", () => {
  it("should control rovers according to instructions", () => {
    const plateau = new Plateau(5, 5);
    const roverData = [
      { x: 1, y: 2, direction: "N" },
      { x: 3, y: 3, direction: "E" },
    ];
    const instructions = ["LMLMLMLMM", "MMRMMRMRRM"];

    const rovers = moveRovers(plateau, roverData, instructions);

    expect(rovers[0].x).toBe(1);
    expect(rovers[0].y).toBe(3);
    expect(rovers[0].direction).toBe("N");

    expect(rovers[1].x).toBe(5);
    expect(rovers[1].y).toBe(1);
    expect(rovers[1].direction).toBe("E");
  });
});
