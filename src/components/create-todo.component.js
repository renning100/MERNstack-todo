import React, { useState } from "react";

function CreateTodo() {
  const [todo, setTodo] = useState({
    todo_description: "",
    todo_responsible: "",
    todo_priority: "",
    todo_completed: false,
  });
  function onSubmit(e) {
    e.preventDefault();
    setTodo({
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false,
    });
  }
  return (
    <div style={{ marginTop: 10 }}>
      <h3>Create New Todo</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            className="form-control"
            value={todo.todo_description}
            onChange={(e) => setTodo({ todo_description: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>responsible:</label>
          <input
            type="text"
            className="form-control"
            value={todo.todo_responsible}
            onChange={(e) => setTodo({ todo_responsible: e.target.value })}
          />
        </div>
        <div className="form-group">
          <div className="form-check from-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityLow"
              value="Low"
              checked={todo.todo_priority === "Low"}
              onChange={(e) => setTodo({ todo_priority: e.target.value })}
            />
            <label className="form-check-label">Low</label>
          </div>
          <div className="form-check from-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityMedium"
              value="Medium"
              checked={todo.todo_priority === "Medium"}
              onChange={(e) => setTodo({ todo_priority: e.target.value })}
            />
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-check from-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityHigh"
              value="High"
              checked={todo.todo_priority === "High"}
              onChange={(e) => setTodo({ todo_priority: e.target.value })}
            />
            <label className="form-check-label">High</label>
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create Todo"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
export default CreateTodo;
