import React from "react";
import "./todo.css";

const Todo = ({ todo, index, markTodo, removeTodo }) => {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
        <br />
        {todo.text1}
        <br />
      </span>
      <div>
        <button variant="outline-success" onClick={() => markTodo(index)}>
          ✓
        </button>{" "}
        <button variant="outline-danger" onClick={() => removeTodo(index)}>
          ✕
        </button>
      </div>
    </div>
  );
};

export default Todo;
