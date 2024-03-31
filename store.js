
import { legacy_createStore } from "redux";
const initialState = {
  todos: [{id:1, tittle:"Lokesh"}],
  nextId: 2,
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add_todo":
      const newTodo = { id: state.nextId, tittle: action.payload.tittle };
      return {
        ...state,
        todos: [...state.todos, newTodo],
        nextId: state.nextId + 1,
      };
    case "Edit_todo":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, tittle: action.payload.tittle }
            : todo
        ),
      };
    case "Delete_todo":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};
const store = legacy_createStore(todoReducer);
export default store;
