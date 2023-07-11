import Square from "../Square";
import "./Board.css";

function Board({ xIsNext, squares, onPlay }) {
  // const [isXNext, setIsXNext] = useState(true);
  // const [squares, setSquares] = useState(Array(9).fill(null));

  // function Square({ value, onSquareClick }) {
  //   return (
  //     <button className="square" onClick={onSquareClick}>
  //       {value}
  //     </button>
  //   );
  // }

  // function handleSquareClick(i) {
  //   if (calculateWiner(squares) || squares[i]) {
  //     return;
  //   }

  //   const newSquares = squares.slice();
  //   // if(isXNext){
  //   //     newSquares[i] = 'X';
  //   // } else {
  //   //     newSquares[i] = '0';
  //   // }
  //   isXNext ? (newSquares[i] = "X") : (newSquares[i] = "O");

  //   setSquares(newSquares);
  //   setIsXNext(!isXNext);
  // }

  // function calculateWiner(squares) {
  //   const lines = [
  //     [1, 2, 3],
  //     [4, 5, 6],
  //     [7, 8, 9],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6],
  //   ];
  //   for (let i = 0; i < lines.length; i++) {
  //     const [a, b, c] = lines[i];
  //     if (
  //       squares[a] &&
  //       squares[a] === squares[b] &&
  //       squares[a] === squares[c]
  //     ) {
  //       return squares[a];
  //     }
  //   }
  //   return null;
  // }

  // const winner = calculateWinner(squares);
  // let status;
  // if (winner) {
  //   status = "Winner: " + winner;
  // } else {
  //   status = "Next player: " + (xIsNext ? "X" : "O");
  // }

  // return (
  //   <>
  //     <div className="status">{status}</div>
  //     <div className="board-row">
  //       <Square value={squares[0]} onSquareClick={() => handleSquareClick(0)} />
  //       <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)} />
  //       <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)} />
  //     </div>
  //     <div className="board-row">
  //       <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)} />
  //       <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)} />
  //       <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)} />
  //     </div>
  //     <div className="board-row">
  //       <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)} />
  //       <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)} />
  //       <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)} />
  //     </div>
  //   </>
  // );

  const handleSquareClick = (i) => {
    if (calculateWiner(squares) || squares[i]) {
      return;
    }

    const nextSquare = squares.slice();

    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }

    onPlay(nextSquare);
  };

  function calculateWiner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        console.log(a, b, c);
        return {
          value: squares[a],
          a,
          b,
          c,
        };
      }
    }
    console.log("hehe");

    return null;
  }

  let status;
  if (calculateWiner(squares)) {
    status = (
      <span style={{ color: "red" }}>
        Winer: {calculateWiner(squares).value}
      </span>
    );
  } else {
    status = xIsNext ? "Next Player: X" : "Next Player: O";
  }

  return (
    <div className="container">
      <h2 className="nextP">{status}</h2>
      <div className="board">
        {squares.map((square, i) => (
          <Square
            calculateWiner={
              (calculateWiner(squares) && calculateWiner(squares).a === i) ||
              (calculateWiner(squares) && calculateWiner(squares).b === i) ||
              (calculateWiner(squares) && calculateWiner(squares).c === i)
            }
            key={i}
            moveValue={square}
            onSquareClick={() => handleSquareClick(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
