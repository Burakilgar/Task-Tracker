import { useState } from "react/cjs/react.development";
import "./App.css";
import Form from "./form/form";
import Todo from "./Todo/todo";

function App() {
  const [display, setdisplay] = useState("block");
  const [text, settext] = useState("Close Add Task Bar");
  const [todos, settodos] = useState([
    {
      text: "Study React Pre-Class Notes",
      text1: "Dec 12th at 2.30pm",
      boolean: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    settodos(newTodos);
  };
  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    settodos(newTodos);
  };
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    settodos(newTodos);
  };

  const değiş = () => {
    if (display === "block" && text === "Close Add Task Bar") {
      setdisplay("none");
      settext("Show Add Task Bar");
    } else {
      setdisplay("block");
      settext("Close Add Task Bar");
    }
  };

  return (
    <div className="App">
      <div className="main">
        <div className="header">
          <h1>Task Tracker</h1>
          <input type="button" value={text} onClick={değiş} />
        </div>
        <div style={{ display: display }}>
          <Form addTodo={addTodo} />
        </div>
        <div>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              markTodo={markTodo}
              removeTodo={removeTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
