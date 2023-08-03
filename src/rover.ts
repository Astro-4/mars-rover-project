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
type Direction = "N" | "E" | "W" | "S";
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

export function move(direction: Direction, x: number, y: number) {
  return "N" + " " + 0 + " " + 1;
}
