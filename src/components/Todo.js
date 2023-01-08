import React, { useState, useEffect } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoEdit, setTodoEdit] = useState(null);
  const [editText, setEditText] = useState("");

  // save to localStorage code
  useEffect(() => {
    const data = localStorage.getItem("todos");
    const loadedData = JSON.parse(data);
    if (loadedData) {
      setTodos(loadedData);
    }
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);
  // end - save to localStorage

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = [
      {
        id: new Date().getTime(),
        text: todo,
        completed: false,
      },
    ];
    setTodos([...todos].concat(newTodo));
    setTodo("");
  };

  const deleteTodo = (id) => {
    const updatedTodo = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodo);
  };

  const handleFinish = (id) => {
    const updatedTodo = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.finished = !todo.finished;
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  const handleEdit = (id) => {
    const updatedTodo = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editText;
      }
      return todo;
    });
    setTodos(updatedTodo);
    setTodoEdit(null);
  };

  return (
    <div className="App">
      <h3>Todo Testing</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          type="text"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add todo</button>
      </form>

      <div>
        {todos.map((item) => (
          <>
            <div key={item.id}>
              {item.id == todoEdit ? (
                <input
                  placeholder="enter edit value"
                  type="text"
                  onChange={(e) => setEditText(e.target.value)}
                />
              ) : (
                item.text
              )}

              <input
                type="checkbox"
                onChange={() => handleFinish(item.id)}
                checked={item.finished}
              />

              {item.id == todoEdit ? (
                <button onClick={() => handleEdit(item.id)}>
                  Save Changes
                </button>
              ) : (
                <button onClick={() => setTodoEdit(item.id)}>Edit</button>
              )}
              <button onClick={() => deleteTodo(item.id)}>Delete</button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
