import Square from "./Square";
import { CurrentBoard } from "./App";

type BoardProps = {
  currentBoard: CurrentBoard;
  handlePlay(position: number): void;
  nextPlayer: string;
};

const Board = ({ currentBoard, handlePlay, nextPlayer }: BoardProps) => {
  const handleClick = (position: number): void => {
    handlePlay(position);
  };

  return (
    <>
      <div className="row">
        <Square value={currentBoard[0]} onSquareClick={() => handleClick(0)} />
        <Square value={currentBoard[1]} onSquareClick={() => handleClick(1)} />
        <Square value={currentBoard[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={currentBoard[3]} onSquareClick={() => handleClick(3)} />
        <Square value={currentBoard[4]} onSquareClick={() => handleClick(4)} />
        <Square value={currentBoard[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={currentBoard[6]} onSquareClick={() => handleClick(6)} />
        <Square value={currentBoard[7]} onSquareClick={() => handleClick(7)} />
        <Square value={currentBoard[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <div>Next Turn: {nextPlayer} </div>
    </>
  );
};
export default Board;
