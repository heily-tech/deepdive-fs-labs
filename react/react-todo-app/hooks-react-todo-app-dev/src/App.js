import { useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

export default function App() {
  const [todoData, setTodoData] = useState([
    {
      id: "1",
      title: "Study English",
      completed: true,
    },
    {
      id: "2",
      title: "Solve an algorithm problem",
      completed: false
    }
  ]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("[DEBUG] form submit captured ✅");

    if (!value.trim()) return; // 빈 문자열 방지

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    // setTodoData([...todoData, newTodo]);
    setTodoData(prev => [...prev, newTodo]);
    setValue("");
    console.log('[CREATE] newTodoData', newTodo);
  }

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1><i>To do.</i></h1>
          <hr />
        </div>
      <List todoData={todoData} setTodoData={setTodoData} />
      <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </div> 
    </div>
  )
}