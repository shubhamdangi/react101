import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div>
      <Child>
        <div>
          <h1>passing from parent to child</h1>
          <p>this the paragraph tag being passed here</p>
        </div>
      </Child>
    </div>
  );
}

export default Parent;
