import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../redux/actions/action";
function Lists({ id, tittle }) {
  const [editing, setEditing] = useState(false);
  const [newTittle, setNewTittle] = useState(tittle);
  const dispatch = useDispatch();

  const handleTodo = () => {
    if (newTittle.trim()) {
      dispatch(editTodo({ id: id, tittle: newTittle }));
      setEditing(false);
    }
  };
  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <div>
      {editing ? (
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            value={newTittle}
            onChange={(e) => setNewTittle(e.target.value)}
          />
          <button className="btn btn-secondary" onClick={handleTodo}>
            save
          </button>
        </div>
      ) : (
        <li className="list-group-item">
          <p>{tittle}</p>
          <div className="actions">
            <button
              className="btn btn-warning"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Del
            </button>
          </div>
        </li>
      )}
    </div>
  );
}

export default Lists;

// function Lists({id,tittle}){
// return(
//   <li>{tittle}</li>
// )
// }
// export default Lists