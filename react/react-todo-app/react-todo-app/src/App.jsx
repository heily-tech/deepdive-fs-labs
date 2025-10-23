import { Component } from 'react';
import './App.css'

// function App() {
//   return (
//     <>
    
//     </>
//   )
// }

// export default App

export default class App extends Component {
  state = {
    todoData: [
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
    ],
    value: '',
  }
  
  btnStyle = {
    color: '#fff',
    border: 'none',
    padding: '4px 9px',
    borderRadius: '31%',
    cursor: 'pointer',
    float: 'right'
  }

  getStyle = (completed) => {
    return {
      padding: '7px',
      borderBottom: '1px rgba(197, 224, 226, 1) dotted',
      textDecoration: completed ? 'line-through' : 'none'
    }
  }

  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id)
    this.setState({todoData: newTodoData});
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false
    }

    this.setState({
      todoData: [...this.state.todoData, newTodo],
      value: ''
    })
  }

  handleCompleteChange = (id) => {
    let newTodoData = this.state.todoData.map((data) => {
      if (data.id === id)
        data.completed = !data.completed;
      return data;
    })

    this.setState({ todoData: newTodoData});
  }

  render() {
    return (
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>
          {this.state.todoData.map(
            (data) => (
              <div style={this.getStyle(data.completed)} key={data.id}>
                <input type="checkbox" checked={data.completed} onChange={() => this.handleCompleteChange(data.id)}/>
                {data.title}
                <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>X</button>
              </div>
            )
          )}
          <form style={ {display: 'flex'} } onSubmit={this.handleSubmit}>
            <input type='text' name='value' style={ {flex: '10', padding: '5px'} } 
                    placeholder='Write to do.' value={this.state.value} onChange={this.handleChange}/>
            <input type='submit' value='Submit' className='btn' style={ {flex: '1'}} />
          </form>
        </div>
      </div>
    )
  }
}