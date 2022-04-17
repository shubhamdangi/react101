import React from "react";

function Salary({ sal }) {
  console.log("Display Sal component");
  return <div>The salary is {sal}</div>;
}

export default React.memo(Salary);
