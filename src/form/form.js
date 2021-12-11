import React, { useState } from "react";
import "./form.css";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [value1, setvalue1] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value && !value1) return;
    addTodo([value, <br />, value1]);

    setValue("");
    setvalue1("");
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Task</label> <br />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add Task"
        />
        <label>Day & Time</label>
        <br />
        <input
          type="text"
          value={value1}
          onChange={(e) => setvalue1(e.target.value)}
          placeholder="Add Day & Time"
        />
        <button>add</button>
      </form>
    </div>
  );
};

export default Form;
