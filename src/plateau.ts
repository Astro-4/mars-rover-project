//plateau is divided into a grid
//rover's position is represented by x and y co-ordinates and the letters N,S,W,E. e.g 0 0 N.
//max (x,y) co-ordinates of (5,5) meaning a 5 by 5 grid. where lower-left co-ordinate is (0,0)
export type Plateau = [xAxis: number, yAxis: number];

export const createPlateau = (plateau: Plateau) => {
  if (plateau[0] >= 0 && plateau[0] <= 5 && plateau[1] >= 0 && plateau[1] <= 5)
    return plateau[0] + " " + plateau[1];
};
