import { useState } from "react";
import "./App.css";

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


  const btnStyle = {
    color: "#235373",
    border: "none",
    padding: "2px 5px",
    borderRadius: "30%",
    cursor: "pointer",
    float: "right"
  }

  const inputStyle = {
      flex: '10', 
      padding: '5px', 
      border: "none", 
      borderRadius: "7px 0px 0px 7px", 
      width: "98.5%", 
      height: "17px", 
      boxShadow: "-1px 5px 18px rgb(0 0 0 / 10%)"
  }

  const getStyle = (isLast, completed) => {
    return {
      padding: "10px",
      // borderBottom: "1px #ccc dotted",
      borderBottom: isLast ? "none" : "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    }
  }


  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id)
    console.log('[DELETE] newTodoData', newTodoData);

    setTodoData(newTodoData);
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

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
    console.log('[CHECK] newTodoData', newTodoData);
  }

return (
  <div className="container">
    <div className="todoBlock">
      <div className="title">
        <h1><i>To do.</i></h1>
        <hr />
      </div>

      {todoData.map((data, index) => (
        <div style={getStyle(index === todoData.length - 1, data.completed)} key={data.id}>
          <input 
            type="checkbox" 
            onChange={() => handleCompleteChange(data.id)}
            defaultChecked={data.completed} />{" "}{data.title}
          <button 
            style={btnStyle} 
            onClick={() => handleClick(data.id)}>X</button>
        </div>
      ))}
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