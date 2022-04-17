import React from "react";

function HandleSal({ calcSal }) {
  console.log("Handle Sal components");
  return (
    <div>
      <button onClick={calcSal}>increase the Salary</button>
    </div>
  );
}

export default React.memo(HandleSal);
