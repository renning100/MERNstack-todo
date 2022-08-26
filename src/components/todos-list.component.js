import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Todo = (props) => {
  <tr>
    <td>{props.todo.todo_description}</td>
    <td>{props.todo.todo_responsible}</td>
    <td>{props.todo.todo_priority}</td>
    <td>
      <Link to={`/edit/${props.todo._id}`}>Edit</Link>
    </td>
  </tr>;
};
function TodosList() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/todos/")
      .then((response) => {
        setTodos({ todos: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  function todoList() {
    return todos.map((todo) => {
      return (
      <Todo todo={todo} key={todo._id} />);
    });
  }

  return (
    <div>
      <h3>Todos List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Responsible</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{todoList()}</tbody>
      </table>
    </div>
  );
}
export default TodosList;
