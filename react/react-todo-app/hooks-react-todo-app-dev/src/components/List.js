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
            // <div style={getStyle(index === todoData.length - 1, data.completed)} key={data.id}>
            <div key={data.id}>
                <div className='flex items-center justify-between w-100 px-4 py-1 my-2 text-gray-700 bg-gray-100 border rounded'>
                    <div className='items-center'>
                        <input 
                            type="checkbox" 
                            onChange={() => handleCompleteChange(data.id)}
                            defaultChecked={data.completed} />
                        {" "}
                        <span className={data.completed ? "line-through" : undefined}>{data.title}</span>
                    </div>
                    <div className='items-center'>
                        <button 
                            // style={btnStyle} 
                            className='px-4 py-2 float-right'
                            onClick={() => handleClick(data.id)}>X</button>
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
}
