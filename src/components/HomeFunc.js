import React from "react";
import ListRender from "./ListRender";
import styles from "./person.module.css";
import NotesContext from "./context/NotesContext";
import { useContext } from "react";

function HomeFunc(props) {
  const a = useContext(NotesContext);
  let { name, city } = props;
  const people = [
    {
      name: "shubham",
      skill: "React",
    },
    {
      name: "vishwas",
      skill: "MERN",
    },
    {
      name: "Harry",
      skill: "web dev",
    },
  ];
  const personList = people.map((person) => (
    <ListRender key={person.name} person={person} />
  ));
  return (
    <div className={styles.list}>
      {personList}
      <h1 className={styles.list}>Success !5</h1>
      <h1>{a.name}</h1>
    </div>
  );
}

export default HomeFunc;
