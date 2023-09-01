// src/roverControl.ts
import { Rover } from "./rover";
import { Plateau } from "./plateau";

export function moveRovers(
  plateau: Plateau,
  roverData: { x: number; y: number; direction: string }[],
  instructions: string[]
): Rover[] {
  const rovers: Rover[] = roverData.map(
    (data) => new Rover(data.x, data.y, data.direction)
  );

  for (let i = 0; i < rovers.length; i++) {
    const rover = rovers[i];
    const roverInstructions = instructions[i];

    for (const instruction of roverInstructions) {
      if (instruction === "M") rover.moveForward();
      else if (instruction === "L") rover.turnLeft();
      else if (instruction === "R") rover.turnRight();

      // Ensure rover stays within plateau bounds
      if (rover.x < 0) rover.x = 0;
      if (rover.x > plateau.width) rover.x = plateau.width;
      if (rover.y < 0) rover.y = 0;
      if (rover.y > plateau.height) rover.y = plateau.height;
    }
  }

  return rovers;
}
