import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { firstCounter: state.firstCounter - action.value };
    case "increment5":
      return { firstCounter: state.firstCounter + action.value };
    case "decrement5":
      return { firstCounter: state.firstCounter - action.value };
    case "reset":
      return initialState;

    default:
      return state;
  }
};

function Complex() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Complex useReducer.</h1>
      <h2> Result is : {count.firstCounter}</h2>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "increment5", value: 5 })}>
        increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement5", value: 5 })}>
        decrement 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default Complex;
