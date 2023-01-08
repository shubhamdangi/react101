import React, { useState, useEffect } from "react";

function LifeState() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect called");
    document.title = `Clicked : ${count}`;
  }, [count]);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      LifeState Functional: <br />
      <p>{count}</p> <button onClick={handleCount}>+</button>
    </div>
  );
}

export default LifeState;
