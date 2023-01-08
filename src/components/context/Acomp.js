import React from "react";
import Bcomp from "./Bcomp";
import Ccomp from "./Ccomp";

export const userContext = React.createContext();

function Acomp() {
  return (
    <div>
      <userContext.Provider value="Shubham Dangi">
        <Ccomp />
        <Bcomp />
      </userContext.Provider>
    </div>
  );
}

export default Acomp;
