import styles from "./Square.module.css";

function Square({ calculateWiner, moveValue, onSquareClick }) {
  if (calculateWiner) {
    return (
      <button
        style={{ backgroundColor: "yellow" }}
        className={styles.square}
        onClick={onSquareClick}
      >
        {moveValue}
      </button>
    );
  } else {
    return (
      <button className={styles.square} onClick={onSquareClick}>
        {moveValue}
      </button>
    );
  }
}

export default Square;
