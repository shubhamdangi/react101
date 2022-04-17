import React from "react";

function Age({ age }) {
  console.log("Age display component");
  return <div> The age is {age}</div>;
}

export default React.memo(Age);
