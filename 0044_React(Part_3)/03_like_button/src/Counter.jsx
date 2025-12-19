import { use, useState } from "react";

function init(){
  return Math.random();
}

export default function Counter() {

  let [count, setCount] = useState(init); // initialization
  // let [count, setCount] = useState(init()); problem with this is that if we pass as a function everytime 
            // the function rerenders which is basically wastage of resources b/c nothing. is changing
  // expect initialization like whole component will render again
  
  console.log({ count });

  function incCount() {
    setCount((currCount) => {
      return currCount + 1;
    });
    setCount((currCount) => {
      return currCount + 1;
    });

    // Component re-rendering happens only when react detects some change in value of the states

    console.log(count);
    // This line will render before any changes are done
  }
  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
}
