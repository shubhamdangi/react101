import React, { useContext } from "react";
import NotesContext from "./components/context/NotesContext";

function Display() {
  const a = useContext(NotesContext);

  return (
    <div>
      <h1>hello Display</h1>
      <h1>is..{a.name}</h1>
      <button onClick={a.handleDisplay}>onChange</button>
    </div>
  );
}

export default Display;
