import { useState } from "react";
import Board from "./Board";
import "./App.css";

function App() {
  const [currentBoard, setCurrentBoard] = useState(Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState("X");

  const handlePlay = (position: number): void => {
    if (currentBoard[position]) return;
    const newBoard = currentBoard.slice();

    if (nextPlayer === "X") {
      newBoard[position] = "X";
      setNextPlayer("O");
    } else {
      newBoard[position] = "O";
      setNextPlayer("X");
    }
    setCurrentBoard(newBoard);
    checkWinner();
  };

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
        currentBoard[b] === currentBoard[c]
      ) {
        return "Winner: " + currentBoard[a];
      }
    }

    return null;
  };

  return (
    <div className="App">
      <Board
        currentBoard={currentBoard}
        handlePlay={handlePlay}
        nextPlayer={nextPlayer}
      />
      {checkWinner()}
    </div>
  );
}

export default App;
