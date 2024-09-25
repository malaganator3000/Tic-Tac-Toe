import { Matrix } from "./Matrix";
import { SquareValue } from "./SquareValue";

export type GameStore = {
  matrix: Matrix<SquareValue>;
  size: number;
  currentPlayer: SquareValue;
  winner: SquareValue;
  setupMatrix: (size: number) => void;
  makeMove: (row: number, col: number) => void;
};
