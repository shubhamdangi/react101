import React from "react";

function HandleAge({ handleAge }) {
  console.log("Handle Age Component");
  return (
    <div>
      <button onClick={handleAge}>increase Age</button>
    </div>
  );
}

export default React.memo(HandleAge);
