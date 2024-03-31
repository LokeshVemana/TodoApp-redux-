import React from "react";
import { useSelector } from "react-redux";
import Lists from "./Lists"
function TodoItem() {
  const todos = useSelector((state) => state.todos);

  console.log(todos);
  return (
    <ul className="list-group mt-4">
      {todos.map((todo) => (
        <Lists key={todo.id} id={todo.id} tittle={todo.tittle} />
      ))}
    </ul>
  );
}

export default TodoItem;
