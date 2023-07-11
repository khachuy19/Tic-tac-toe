import { useState } from "react";
import classNames from "classnames/bind";
import Board from "../Board";
import styles from "./Game.module.css";
import Button from "../Button";

const cx = classNames.bind(styles);

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (i) => setCurrentMove(i);

  const moves = history.map((squares, i) => {
    let moveInfo;
    if (i > 0) {
      moveInfo = "Go to move #" + i;
    } else {
      moveInfo = "Go to game start";
    }

    return (
      <li key={i}>
        <Button small rounded text outline onClick={() => jumpTo(i)}>
          {moveInfo}
        </Button>
      </li>
    );
  });

  return (
    <div className={cx("game-container")}>
      <div className={cx("game-board")}>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className={cx("game-moves")}>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
