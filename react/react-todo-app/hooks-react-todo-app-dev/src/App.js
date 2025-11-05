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
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-7 m-4 bg-white rounded shadow lg:w-3/4">
        <div className="flex justify-between mb-3 ">
          <h1><i>To do.</i></h1>
          {/* <h1>Delete All</h1> */}
        </div>
        <List todoData={todoData} setTodoData={setTodoData} />
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </div> 
    </div>
  )
}