// Hooks were a new addition in React 16.8.
// They let you use state and other React features without writing a class.
{
  /*  let count = 0;

   function incCount() {
    count += 1;
    console.log(count);
  }    
  <h3>Count = {count}</h3>
  <button onClick={incCount}>Increase Count</button> */
}

import { use, useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  function incCount() {
    // It is basically like setCount will trigger change in value of count as the value passed in it
    setCount(count + 1);
    console.log(count);
  }
  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
}
