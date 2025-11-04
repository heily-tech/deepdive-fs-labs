import React from 'react'

export default function List({ todoData, setTodoData }) {
    const btnStyle = {
        color: "#235373",
        border: "none",
        padding: "2px 5px",
        borderRadius: "30%",
        cursor: "pointer",
        float: "right"
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
        <div>
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
    )
}
