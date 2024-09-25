import React from "react";
import { useGameStore } from "../stores/matrix.store";
import { useShallow } from "zustand/shallow";

export interface SquareProps {
  point: { x: number; y: number };
}

export const Square = React.memo<SquareProps>(({ point: { x, y } }) => {
  const [makeMove] = useGameStore(useShallow((state) => [state.makeMove]));
  const [value] = useGameStore(useShallow((state) => [state.matrix[x][y]]));
  return (
    <button onClick={() => makeMove(x, y)} className="square">
      {value}
    </button>
  );
});
