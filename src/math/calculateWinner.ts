import { Matrix } from "../types/Matrix";
import { checkLine } from "./checkLine";
import { generateLine } from "./generateLine";

export const calculateWinner = <T>(matrix: Matrix<T>): T | null => {
  const size = matrix.length;

  for (let i = 0; i < size; i++) {
    const rowLine = generateLine([i, 0], [0, 1], size);
    const rowWinner = checkLine(rowLine, matrix);
    if (rowWinner) return rowWinner;

    const colLine = generateLine([0, i], [1, 0], size);
    const colWinner = checkLine(colLine, matrix);
    if (colWinner) return colWinner;
  }
  
  const firstDiagonal = generateLine([0, 0], [1, 1], size);
  const secondDiagonal = generateLine([0, size - 1], [1, -1], size);

  return checkLine(firstDiagonal, matrix) || checkLine(secondDiagonal, matrix);
};
