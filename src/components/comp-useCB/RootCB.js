import React, { useState, useCallback } from "react";
import AgeComp from "./AgeComp";
import HandleAgeComp from "./HandleAgeComp";
import HandleSalComp from "./HandleSalComp";
import SalaryComp from "./SalaryComp";

function RootCB() {
  const [salary, setSalary] = useState(95000);
  const [age, setAge] = useState(22);

  const handleAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const handleSal = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      RootCB
      <SalaryComp salary={salary} />
      <HandleSalComp handleSal={handleSal} />
      <AgeComp age={age} />
      <HandleAgeComp handleAge={handleAge} />
    </div>
  );
}

export default RootCB;
