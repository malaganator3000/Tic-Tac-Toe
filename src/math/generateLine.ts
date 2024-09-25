import { Line } from "../types/Line";
import { Point } from "../types/Point";

export const generateLine = (
  startPoint: Point,
  vectorPoint: Point,
  size: number
): Line => {
  const line: Line = [];
  for (let t = 0; t < size; t++) {
    const [x, y] = startPoint;
    const [vX, vY] = vectorPoint;
    //x = x + tdx
    //y = y + tdy
    line.push([x + t * vX, y + t * vY]);
  }

  return line;
};
