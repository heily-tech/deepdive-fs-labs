import { useState } from "react";
import "./App.css";
import List from "./components/List";

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

  const inputStyle = {
      flex: '10', 
      padding: '5px', 
      border: "none", 
      borderRadius: "7px 0px 0px 7px", 
      width: "98.5%", 
      height: "17px", 
      boxShadow: "-1px 5px 18px rgb(0 0 0 / 10%)"
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

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
      
    </div> 

    <form style={{ display: 'flex', marginTop: '10px'}} onSubmit={handleSubmit}>
      <input
        type="text"
        name="value"
        style={inputStyle}
        placeholder='Input'
        value={value}
        onChange={handleChange} />
      <input
        type="submit"
        value="submit"
        className="btn"
        style={{ flex: '1', border: 'none', borderRadius: '0px 7px 7px 0px' }} />
    </form>
  </div>
)
}