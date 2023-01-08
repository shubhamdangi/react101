import React from "react";

function ListRender({ person }) {
  return (
    <div>
      <h1>
        Mai hoon {person.name} or mujhe {person.skill} pasand hai
      </h1>
    </div>
  );
}

export default ListRender;
