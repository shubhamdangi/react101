import React, { useEffect, useState, useMemo } from "react";

function Header() {
  const [num, setNum] = useState(4);
  const [num2, setNum2] = useState(2);

  const calc = () => {
    setNum(num + 1);
  };

  const calc2 = () => {
    setNum2(num2 + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    return num % 2 === 0;
  }, [num]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={calc}>Shoot {num}</button>
      <p>{isEven ? "Even" : "odd"}</p>
      <button onClick={calc2}>Shoot {num2}</button>
    </div>
  );
}

export default Header;
