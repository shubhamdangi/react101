import React from "react";

function HandleAge({ calcAge }) {
  console.log("Handle Age Component");
  return (
    <div>
      <button onClick={calcAge}>increase Age</button>
    </div>
  );
}

export default React.memo(HandleAge);
