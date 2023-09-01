export class Rover {
  constructor(public x: number, public y: number, public direction: string) {}

  moveForward(): void {
    if (this.direction === "N") this.y++;
    else if (this.direction === "E") this.x++;
    else if (this.direction === "S") this.y--;
    else if (this.direction === "W") this.x--;
  }

  turnLeft(): void {
    if (this.direction === "N") this.direction = "W";
    else if (this.direction === "E") this.direction = "N";
    else if (this.direction === "S") this.direction = "E";
    else if (this.direction === "W") this.direction = "S";
  }

  turnRight(): void {
    if (this.direction === "N") this.direction = "E";
    else if (this.direction === "E") this.direction = "S";
    else if (this.direction === "S") this.direction = "W";
    else if (this.direction === "W") this.direction = "N";
  }
}
