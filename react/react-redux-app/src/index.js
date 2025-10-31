import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer);
console.log(store.getState());

// store.dispatch({
//   type: 'ADD_TODO',
//   text: 'Eat Breakfast'
// })
// value={store.getState()} 
// onIncrement={() => store.dispatch({type : 'INCREMENT'})}
// onDecrement={() => store.dispatch({type : 'DECREMENT'})} 


// const render = () => 
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
// render();
// store.subscribe(render);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
