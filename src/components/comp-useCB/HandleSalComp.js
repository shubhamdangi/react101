import React from "react";

function HandleSal({ handleSal }) {
  console.log("Handle Sal components");
  return (
    <div>
      <button onClick={handleSal}>increase the Salary</button>
    </div>
  );
}

export default React.memo(HandleSal);
