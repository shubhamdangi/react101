import React, { useState, useEffect } from "react";
import axios from "axios";

function Effect() {
  const [val, setVal] = useState("");
  const [key, setKey] = useState();
  const [result, setResult] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${key}`)
      .then((res) => {
        console.log(res.data);
        setResult(res.data);
      })
      .catch((error) => console.log(error));
  }, [key]);

  return (
    <div>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={() => setKey(val)}>submit</button>
      {result.title}
    </div>
  );
}

export default Effect;
