type SquareProps = {
  value: string;
};

const Square = ({ value }: SquareProps) => (
  <button className="square">{value}</button>
);

export default Square;
