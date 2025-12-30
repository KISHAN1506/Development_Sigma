import { useState } from "react";

export default function Lottery() {
  let [num, setNum] = useState(0);

  let genNum = () => {
    let val = Math.floor(Math.random() * 999) + 1;
    setNum(val);
  };

  let checkWin = () => {
    let sum = 0;
    let tempVal = num;

    while (tempVal != 0) {
      let digit = tempVal % 10;
      tempVal = Math.floor(tempVal / 10);
      sum += digit;
    }
    if (sum == 15) {
      return true;
    } else {
      return false;
    }
  };

  let message;
  if (checkWin()) {
    message = <h2>Lottery!! You won</h2>;
  } else {
    message = <h2>Lottery Try Again</h2>;
  }
  return (
    <>
      {message}
      <p>Lottery Ticket = {num}</p>
      <button onClick={genNum}>Get New Ticket</button>
    </>
  );
}
