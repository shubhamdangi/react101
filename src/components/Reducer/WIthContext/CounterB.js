import React, { useContext } from "react";
import { CountContext } from "./CounterA";

function CounterB() {
  const countContext = useContext(CountContext);
  return (
    <div>
      CounterB with Context+Reducer
      <h3>{countContext.countState}</h3>
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>
        Increment
      </button>
    </div>
  );
}

export default CounterB;
