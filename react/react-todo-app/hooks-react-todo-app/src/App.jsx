import { Component, useState } from 'react';
import './App.css'

// function App() {
//   return (
//     <>
    
//     </>
//   )
// }

// export default App

export default function App() {
  const [todoData, setTodoData] = useState([
    {
      id: "1",
      title: "Study English",
      completed: true,
    },
    {
      id: "2",
      title: "Clean Room",
      completed: false,
    }
  ]);
  const [value, setValue] = useState('');
  
  const btnStyle = {
    color: '#fff',
    border: 'none',
    padding: '4px 9px',
    borderRadius: '31%',
    cursor: 'pointer',
    float: 'right'
  }

  const getStyle = (completed) => {
    return {
      padding: '7px',
      borderBottom: '1px rgba(197, 224, 226, 1) dotted',
      textDecoration: completed ? 'line-through' : 'none'
    }
  }

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id)
    setTodoData(newTodoData);
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false
    }
    setTodoData([...todoData, newTodo]);
    setValue('');
  }

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id)
        data.completed = !data.completed;
      return data;
    })

    setTodoData(newTodoData);
  }

  return (
    <div className='container'>
      <div className='todoBlock'>
        <div className='title'>
          <h1>할 일 목록</h1>
        </div>
        {todoData.map(
          (data) => (
            <div style={getStyle(data.completed)} key={data.id}>
              <input type="checkbox" checked={data.completed} onChange={() => handleCompleteChange(data.id)}/>
              {data.title}
              <button style={btnStyle} onClick={() => handleClick(data.id)}>X</button>
            </div>
          )
        )}
        <form style={ {display: 'flex'} } onSubmit={handleSubmit}>
          <input type='text' name='value' style={ {flex: '10', padding: '5px'} } 
                  placeholder='Write to do.' value={value} onChange={handleChange}/>
          <input type='submit' value='Submit' className='btn' style={ {flex: '1'}} />
        </form>
      </div>
    </div>
  )
}