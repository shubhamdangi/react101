import React, { useContext } from "react";
import { userContext } from "./Acomp";

function Bcomp() {
  const user = useContext(userContext);
  return <div>Bcomp : {user}</div>;
}

export default Bcomp;
