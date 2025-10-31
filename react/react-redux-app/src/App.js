import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter );
  const todos = useSelector((state) => state.todos );
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_TODO', text: todoValue })
  }

  const handleIncrement = () => {
    dispatch({type: 'INCREMENT'})
  }

  const handleDecrement = () => {
    dispatch({type: 'DECREMENT'})
  }


  return (
    <div className="App">
      <div>
        <ul>
          {todos.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
        <form onSubmit={handleSubmit}>
          <input 
            type='text' 
            value={todoValue} 
            onChange={(e) => setTodoValue(e.target.value)} />
            <input type='submit' />
        </form>
      </div>

      <br />

      <div>
        Clickked: {counter} times
        {" "}
        <button onClick={handleIncrement}>+</button>
        {" "}
        <button onClick={handleDecrement}>-</button>
      </div>

    </div>
  );
}

export default App;
