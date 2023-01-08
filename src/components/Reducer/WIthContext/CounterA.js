import React, { useReducer } from "react";
import CounterB from "./CounterB";

const initialState = 0;
export const CountContext = React.createContext();

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterA() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <CounterB />
      </CountContext.Provider>
    </div>
  );
}

export default CounterA;
