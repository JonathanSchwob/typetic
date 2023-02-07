import { useState } from "react";
import Board from "./Board";
import "./App.css";

export type Player = "X" | "O";
export type Mark = Player | null;
export type CurrentBoard = [
  Mark,
  Mark,
  Mark,
  Mark,
  Mark,
  Mark,
  Mark,
  Mark,
  Mark
];

function App() {
  const [currentBoard, setCurrentBoard] = useState<CurrentBoard>([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [nextPlayer, setNextPlayer] = useState<Player>("X");

  const checkWinner = (): string | null => {
    const winStates: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i: number = 0; i < winStates.length; i++) {
      const [a, b, c] = winStates[i];
      if (
        currentBoard[a] === currentBoard[b] &&
        currentBoard[b] === currentBoard[c] &&
        currentBoard[a] !== null
      ) {
        return "Winner: " + currentBoard[a];
      }
    }

    return null;
  };

  const winner = checkWinner();

  const handlePlay = (position: number): void => {
    if (currentBoard[position] || winner !== null) return;
    const newBoard: CurrentBoard = currentBoard.slice();

    if (nextPlayer === "X") {
      newBoard[position] = "X";
      setNextPlayer("O");
    } else {
      newBoard[position] = "O";
      setNextPlayer("X");
    }
    setCurrentBoard(newBoard);
  };

  return (
    <div className="App">
      <Board
        currentBoard={currentBoard}
        handlePlay={handlePlay}
        nextPlayer={nextPlayer}
      />
      {winner}
    </div>
  );
}

export default App;
