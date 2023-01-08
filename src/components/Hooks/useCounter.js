import React, { useState } from "react";

function useCounter(initialValue, number) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prevCount) => prevCount + number);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - number);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return [count, increment, decrement, reset];
}

export default useCounter;
