import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });

  let updateBlue = () => {
    // moves.blue += 1;
    console.log(moves);
    setMoves((prevMoves) => {
      // We are using this spread function b/c if we just change some part of object,
      // ultimately the reference of the object is same so react can't detect if anything changed or not
      // if we spread the value using ... , a completely new reference is passed so react can detect
      // the changes and re-render the component
      return { ...prevMoves, blue: prevMoves.blue + 1 };
    });
  };
  let updateRed = () => {
    // moves.red += 1;
    console.log(moves);
    setMoves((prevMoves) => {
      return { ...prevMoves, red: prevMoves.red + 1 };
    });
  };
  let updateYellow = () => {
    // moves.yellow += 1;
    console.log(moves);
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    });
  };
  let updateGreen = () => {
    // moves.green += 1;
    console.log(moves);
    setMoves((prevMoves) => {
      return { ...prevMoves, green: prevMoves.green + 1 };
    });
  };

  return (
    <div>
      <p>Game Begins!!</p>
      <div className="board">
        <p>Blue moves = {moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Red moves = {moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>
          +1
        </button>
        <p>Yellow moves = {moves.yellow}</p>
        <button style={{ backgroundColor: "yellow" }} onClick={updateYellow}>
          +1
        </button>
        <p>Green moves = {moves.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
          +1
        </button>
      </div>
    </div>
  );
}
