import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/action";
import TodoItem from "./TodoItem";

function Todo() {
  const dispatch = useDispatch();
  const [todoTittle, SettodoTittle] = React.useState("");
  const handleTodo = () => {
    if (todoTittle.trim()) {
      //to know the empty space or remove
      const newTodo = {
        tittle: todoTittle,
      };
      dispatch(addTodo(newTodo));
      SettodoTittle("");
    }
  };
  return (
    <div className="container mt-5 w-50">
      <h3 className="text-primar text-center " style={{color:"blue"}}>Todo App using Redux</h3><hr></hr>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={todoTittle}
          onChange={(e) => SettodoTittle(e.target.value)}
          placeholder="Please enter text"
        />
        <button className="btn btn-primary" onClick={() => handleTodo()}>
          Add
        </button>
      </div>
      <TodoItem/>
    </div>
  );
}

export default Todo;
