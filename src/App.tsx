import { useState } from "react";
import Board from "./Board";
import "./App.css";

type Player = "X" | "O";
type Mark = Player | null;
// prettier-ignore
export type CurrentBoard = [ Mark, Mark, Mark, 
                             Mark, Mark, Mark, 
                             Mark, Mark, Mark ];

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

function App() {
  const [currentBoard, setCurrentBoard] = useState<CurrentBoard>(
    Array(9).fill(null) as CurrentBoard
  );

  const [nextPlayer, setNextPlayer] = useState<Player>("X");

  const checkWinner = (): string | null => {
    for (const [a, b, c] of winStates) {
      if (
        currentBoard[a] === currentBoard[b] &&
        currentBoard[b] === currentBoard[c] &&
        currentBoard[a] !== null
      ) {
        return "Winner: " + currentBoard[a];
      }
    }

    if (isBoardFull()) {
      return "Its a Draw!";
    }

    return null;
  };

  const isBoardFull = () => {
    const newCurrentBoard = [...currentBoard];
    for (let char of newCurrentBoard) {
      if (char === null) {
        return false;
      }
    }

    return true;
  };

  const winner = checkWinner();

  const handlePlay = (position: number): void => {
    if (currentBoard[position] || winner !== null) return;
    const newBoard: CurrentBoard = [...currentBoard];

    if (nextPlayer === "X") {
      newBoard[position] = "X";
      setNextPlayer("O");
    } else {
      newBoard[position] = "O";
      setNextPlayer("X");
    }
    console.log(newBoard, "hello");
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
