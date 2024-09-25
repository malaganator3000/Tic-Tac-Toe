import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { calculateWinner } from "../math/calculateWinner";
import { GameStore } from "../types/GameStore";
import { generateMatrix } from "../math/generateMatrix";
import { SquareValue } from "../types/SquareValue";

export const useGameStore = create<GameStore>()(
  immer((set) => ({
    matrix: [],
    size: 0,
    currentPlayer: "X",
    winner: null,
    setupMatrix: (size: number) => {
      set({
        matrix: generateMatrix<SquareValue>(size),
        size,
      });
    },
    makeMove: (row: number, col: number) => {
      set((state) => {
        if (state.winner || state.matrix[row][col]) {
          return;
        }

        state.matrix[row][col] = state.currentPlayer;

        const existWinner = calculateWinner(state.matrix);
        if (existWinner) {
          state.winner = existWinner;
        } else {
          state.currentPlayer = state.currentPlayer === "X" ? "O" : "X";
        }
      });
    },
  }))
);


