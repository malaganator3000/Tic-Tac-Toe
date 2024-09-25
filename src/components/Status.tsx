import React from "react";
import { useGameStore } from "../stores/matrix.store";

export const Status: React.FC = () => {
  const winner = useGameStore((sttate) => sttate.winner);
  const currentPlayer = useGameStore((state) => state.currentPlayer);

  const status = winner
    ? `The winner is ${winner}`
    : `Next Player : ${currentPlayer}`;
  return (
    <>
      <h2>{status}</h2>
    </>
  );
};
