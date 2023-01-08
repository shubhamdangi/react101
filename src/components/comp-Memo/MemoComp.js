import React, { useState, useMemo } from "react";

function MemoComp() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 100000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <div>
      MemoComp
      <h2> Counter One: {countOne}</h2> <h2>Count Two: {countTwo}</h2>
      // first use isEven() for demo delay
      <h3>{isEven ? "even" : "odd"}</h3>
      <button onClick={() => setCountOne(countOne + 1)}>handle One</button>
      <button onClick={() => setCountTwo(countTwo + 1)}>handle Two</button>
    </div>
  );
}

export default MemoComp;
