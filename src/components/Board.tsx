import React, { useMemo } from "react";
import { Square } from "./Square";
import { useGameStore } from "../stores/matrix.store";
import { generateMatrix } from "../math/generateMatrix";
import { SquareValue } from "../types/SquareValue";
import { useShallow } from "zustand/shallow";

export interface BoardProps {}

export const Board: React.FC<BoardProps> = () => {
  const [size] = useGameStore(useShallow((state) => [state.size]));
  const cloneArray = useMemo(() => generateMatrix<SquareValue>(size), [size]);
  return (
    <div className="board">
      {cloneArray.map((row, rowIndex) => (
        <div className="square-row" key={rowIndex}>
          {row.map((_, colIndex) => (
            <Square
              key={`${rowIndex}-${colIndex}`}
              point={{ x: rowIndex, y: colIndex }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
