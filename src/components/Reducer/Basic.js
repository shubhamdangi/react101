import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;

    default:
      return state;
  }
};

function Basic() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Basic useReducer.</h1>
      <h2> Result is : {count}</h2>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
}

export default Basic;
