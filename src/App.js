import React, { useState } from "react";
import Boundary from "./components/Boundary";
import MemoComp from "./components/comp-Memo/MemoComp";
import RootCB from "./components/comp-useCB/RootCB";
import Acomp from "./components/context/Acomp";
import NotesState from "./components/context/NotesState";
import Effect from "./components/Effect";
import ErrorComp from "./components/ErrorComp";
import HomeClass from "./components/HomeClass";
import HomeFunc from "./components/HomeFunc";
import Usage from "./components/Hooks/Usage";
import HttpComp from "./components/HttpComp";
import LifeClass from "./components/LifeCycle.js/LifeClass";
import LifeState from "./components/LifeCycle.js/LifeState";
import Parent from "./components/ParentChild/Parent";
import Basic from "./components/Reducer/Basic";
import Complex from "./components/Reducer/Complex";
import CounterA from "./components/Reducer/WIthContext/CounterA";
import RefComp from "./components/useRef/RefComp";
import Display from "./Display";

const initValue = {
  name: "shubham",
  city: "bhopal",
};

function App() {
  const [person, setPerson] = useState(initValue);
  const handleChange = () => {
    const newPerson = { ...person };
    newPerson.name = "shailendra";
    newPerson.city = "bangalore";
    setPerson(newPerson);
  };

  return (
    <div className="App">
      <h1>Hello React CI/CD</h1>
      {/* <NotesState>
        <Parent />
        <Display />
        <HomeClass />
        <HomeFunc name="shubham" city="bhopal" />
        <Boundary>
          <ErrorComp isError="mark" />
        </Boundary>
      </NotesState> */}
      <HttpComp />
      {/* <LifeClass /> */}
      <LifeState />
      <Effect />
      <Acomp />
      <Basic />
      <Complex />
      <CounterA />
      <RootCB />
      {/* <MemoComp /> */}
      <Usage />
      <RefComp />
      <p>
        {person.name} {person.city}
      </p>
      <button onClick={handleChange}>state immu</button>
    </div>
  );
}

export default App;
