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

  const checkWinner = (): void => {
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
  };

  return (
    <div className="App">
      <Board
        currentBoard={currentBoard}
        handlePlay={handlePlay}
        nextPlayer={nextPlayer}
      />
    </div>
  );
}

export default App;
