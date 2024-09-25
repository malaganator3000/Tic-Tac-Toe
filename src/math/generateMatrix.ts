import { Matrix } from "../types/Matrix";

export const generateMatrix = <T>(size: number): Matrix<T> => {
  return Array(size)
    .fill(null)
    .map(() => Array(size).fill(null));
};
