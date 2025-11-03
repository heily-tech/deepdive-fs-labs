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

  inputStyle = {
      flex: '10', 
      padding: '5px', 
      border: "none", 
      borderRadius: "7px", 
      width: "98.5%", 
      height: "17px", 
      boxShadow: "-1px 5px 18px rgb(0 0 0 / 10%)"
  }

  getStyle = (isLast) => {
    return {
      padding: "10px",
      // borderBottom: "1px #ccc dotted",
      borderBottom: isLast ? "none" : "1px #ccc dotted",
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
            <hr />
          </div>

          {this.state.todoData.map((data, index) => (
            <div style={this.getStyle(index === this.state.todoData.length - 1)} key={data.id}>
              <input type="checkbox" defaultChecked={false} />
              {" "}{data.title}
              <button 
                style={this.btnStyle} 
                onClick={() => this.handleClick(data.id)}>X</button>
            </div>
          ))}
        </div>

        <form style={{ display: 'flex', marginTop: '10px'}}>
          <input
            type="text"
            name="value"
            style={this.inputStyle}
            placeholder='Input'
            value="" />
        </form>
      </div>
    )
  }
}