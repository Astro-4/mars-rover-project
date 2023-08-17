//should be able to turn left and right in 4 directions
//should only turn the number of times the input is provided
/* currently it is facing north, 
 but should be able to turn east,
 then south, 
 then west, 
 and back north when given the 'R' (right) input
*/
/* currently it is facing north, 
 but should be able to turn west,
 then south, 
 then east, 
 and back north when given the 'L' (left) input
*/
//should be able to move forward in the direction it's facing given the 'M' input
//should only move the number of times the input is provided
import { createPlateau, Plateau } from "./plateau";
type Direction = "N" | "E" | "W" | "S";
type Coordinates = [x: number, y: number];
type Action = "L" | "M" | "R";
// type Position = ;
export const leftTurn = (direction: Direction) => {
  if (direction === "N") return "W";
  if (direction === "W") return "S";
  if (direction === "S") return "E";
  return "N";
};
export const rightTurn = (direction: Direction) => {
  if (direction === "N") return "E";
  if (direction === "E") return "S";
  if (direction === "S") return "W";
  return "N";
};

export const moveForward = (direction: Direction, coordinates: Coordinates) => {
  if (direction === "N")
    return `${direction} ${coordinates[0]} ${coordinates[1] + 1}`;
  if (direction === "S")
    return `${direction} ${coordinates[0]} ${coordinates[1] - 1}`;
  if (direction === "E")
    return `${direction} ${coordinates[0] + 1} ${coordinates[1]}`;
  if (direction === "W")
    return `${direction} ${coordinates[0] - 1} ${coordinates[1]}`;
};

export const giveInstruction = (action: Action) => {
  if (action === "L") return leftTurn;
  if (action === "R") return rightTurn;
  if (action === "M") return moveForward;
};

export const moveRover = (
  plateau: Plateau,
  currentPosition: string,
  instructions: string
) => {};
