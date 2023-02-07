type SquareProps = {
  value: null | string;
  onSquareClick: (event: React.MouseEvent<HTMLElement>) => void;
};

const Square = ({ value, onSquareClick }: SquareProps) => (
  <button className="square" onClick={onSquareClick}>
    {value}
  </button>
);

export default Square;
