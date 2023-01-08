import React from "react";
import { userContext } from "./Acomp";
function Ccomp() {
  return (
    <div>
      <userContext.Consumer>
        {(user) => {
          return <h1>user name: {user}</h1>;
        }}
      </userContext.Consumer>
    </div>
  );
}

export default Ccomp;
