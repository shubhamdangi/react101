import React from "react";

function ErrorComp({ isError }) {
  if (isError === "mark") {
    throw new Error("Oops! something is wrong");
  }
  return <div>Error 001 {isError}</div>;
}

export default ErrorComp;
