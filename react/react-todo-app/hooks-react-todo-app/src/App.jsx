import { Component, useState } from 'react';
import './App.css'
import Lists from './components/Lists';
import Form from './components/Form';

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
  const [value, setValue] = useState('');


  return (
    <div className='container'>
      <div className='todoBlock'>
        <div className='title'>
          <h1>할 일 목록</h1>
        </div>
        <Lists 
          todoData={todoData}
          setTodoData={setTodoData}
        />
        <Form
          handleSubmit={handleSubmit}
          value={value}
          setValue={setValue}
        />
      </div>
    </div>
  )
}