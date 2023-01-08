import React from "react";
import useCounter from "./useCounter";

function Usage() {
  const [count, increment, decrement, reset] = useCounter(5, 10);
  return (
    <div>
      Usage
      <h1>Display count: {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Usage;
