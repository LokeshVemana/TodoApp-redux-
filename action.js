export function addTodo(todo) {
  return { type: "Add_todo", payload: todo };
}
export function editTodo(todo) {
    return { type: "Edit_todo", payload: todo };
}
export function deleteTodo(id) {
    return { type: "Delete_todo", payload: id};
}