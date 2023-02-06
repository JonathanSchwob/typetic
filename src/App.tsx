import { useState } from "react";
import Board from "./Board";
import "./App.css";

function App() {
  const [currentBoard, setCurrentBoard] = useState(Array(9).fill(null));

  const handlePlay = (position: number): void => {
    const newBoard = currentBoard.slice();
    newBoard[position] = "X";
    setCurrentBoard(newBoard);
  };

  return (
    <div className="App">
      <Board currentBoard={currentBoard} handlePlay={handlePlay} />
    </div>
  );
}

export default App;
