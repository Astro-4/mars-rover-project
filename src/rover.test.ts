// tests/rover.test.ts
import { Rover } from "../src/rover";

describe("Rover", () => {
  it("should create a rover with initial position and direction", () => {
    const rover = new Rover(3, 2, "N");
    expect(rover.x).toBe(3);
    expect(rover.y).toBe(2);
    expect(rover.direction).toBe("N");
  });

  it("should move forward north", () => {
    const rover = new Rover(3, 2, "N");
    rover.moveForward();
    expect(rover.x).toBe(3);
    expect(rover.y).toBe(3);
  });

  it("should turn left", () => {
    const rover = new Rover(3, 2, "N");
    rover.turnLeft();
    expect(rover.direction).toBe("W");
  });

  it("should turn right", () => {
    const rover = new Rover(3, 2, "N");
    rover.turnRight();
    expect(rover.direction).toBe("E");
  });

  // Add more tests for moving forward in other directions, turning, etc.
});
