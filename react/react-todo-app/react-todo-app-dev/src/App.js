import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  btnStyle = {
    color: "#235373",
    border: "none",
    padding: "2px 5px",
    borderRadius: "30%",
    cursor: "pointer",
    float: "right"
  }

  getStyle = () => {
    return {
      padding: "20px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none",
    }
  }

  state = {
    todoData: [
      {
        id: "1",
        title: "Study english",
        completed: true
      },
      {
        id: "2",
        title: "Cleaning my desk",
        completed: false
      },
      {
        id: "3",
        title: "Solve 1 algorithm problem",
        completed: true
      },
      {
        id: "4",
        title: "Test Data",
        completed: true
      },
    ],
    value: "",
  }

  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id)
    console.log('newTodoData', newTodoData);

    this.setState({ todoData: newTodoData });
  }

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1><i>To do.</i></h1>
          </div>

        {this.state.todoData.map((data) => (
          <div style={this.getStyle()} key={data.id}>
            <input type="checkbox" defaultChecked={false} />
            {" "}{data.title}
            <button 
              style={this.btnStyle} 
              onClick={() => this.handleClick(data.id)}>X</button>
          </div>
        ))}

        </div>
      </div>
    )
  }
}