import { Line } from "../types/Line";
export const checkLine = <T>(line: Line, matrix: T[][]): T | null => {
  const [x, y] = line[0];
  const firstValue = matrix[x][y];
  if (firstValue === null) return null;

  for (let i = 1; i < line.length; i++) {
    const [x, y] = line[i];
    const value = matrix[x][y];
    if (value !== firstValue) {
      return null;
    }
  }

  return firstValue;
};

//NULL X NULL
//NULL X O
//O    X NUll
