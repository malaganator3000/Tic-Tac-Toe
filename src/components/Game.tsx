import React, { useEffect } from "react";
import { Board } from "./Board";
import { Status } from "./Status";
import { useGameStore } from "../stores/matrix.store";
import { useShallow } from "zustand/shallow";
export interface GameProps {
  size: number;
}
export const Game: React.FC<GameProps> = ({ size }) => {
  const [setupMatrix] = useGameStore(
    useShallow((state) => [state.setupMatrix])
  );
  
  useEffect(() => {
    setupMatrix(size);
  }, []);

  return (
    <div className="game">
      <Status />
      <Board />
    </div>
  );
};
