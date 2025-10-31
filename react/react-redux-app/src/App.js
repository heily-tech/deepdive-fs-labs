import './App.css';

function App({ value, onIncrement, onDecrement }) {
  console.log('value : ', value);
  return (
    <div className="App">
      Clickked: {value} times
      {" "}
      <button
        onClick={onIncrement}>
        + </button>
      {" "}
      <button
        onClick={onDecrement}>
        - </button>
    </div>
  );
}

export default App;
