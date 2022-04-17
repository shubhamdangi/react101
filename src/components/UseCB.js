import React, { useState, useCallback } from "react";
import Age from "./comp-useCB/Age";
import HandleAge from "./comp-useCB/HandleAge";
import HandleSal from "./comp-useCB/HandleSal";
import Salary from "./comp-useCB/Salary";

function UseCB() {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(95000);

  const incrementSal = useCallback(() => {
    setSalary(salary + 10000);
  }, [salary]);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  return (
    <div>
      <Age age={age} />
      <HandleAge calcAge={incrementAge} />
      <hr />
      <Salary sal={salary} />
      <HandleSal calcSal={incrementSal} />
    </div>
  );
}

export default UseCB;
