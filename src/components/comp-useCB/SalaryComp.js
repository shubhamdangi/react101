import React from "react";

function Salary({ salary }) {
  console.log("--------Display Sal component");
  return <div>The salary is {salary}</div>;
}

export default React.memo(Salary);
