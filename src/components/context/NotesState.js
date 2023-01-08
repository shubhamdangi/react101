import React, { useState } from "react";
import NotesContext from "./NotesContext";

function NotesState(props) {
  const person = {
    name: "shubham",
    city: "bhopal",
  };

  const [details, setDetails] = useState(person);

  const handleDetails = () => {
    setDetails({
      name: "test",
      city: "london",
    });
  };

  return (
    <NotesContext.Provider value={{ details, handleDetails }}>
      {props.children}
    </NotesContext.Provider>
  );
}

export default NotesState;
