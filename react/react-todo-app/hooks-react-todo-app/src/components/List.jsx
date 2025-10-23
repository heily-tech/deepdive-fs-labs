export default function List({id, title, completed, todoData, setTodoData}) {
    const getStyle = (completed) => {
        return {
            padding: '7px',
            borderBottom: '1px rgba(197, 224, 226, 1) dotted',
            textDecoration: completed ? 'line-through' : 'none'
        }
    }
    const btnStyle = {
        color: '#fff',
        border: 'none',
        padding: '4px 9px',
        borderRadius: '31%',
        cursor: 'pointer',
        float: 'right'
    }

    const handleClick = (id) => {
        let newTodoData = todoData.filter((data) => data.id !== id)
        setTodoData(newTodoData);
    }

    const handleCompleteChange = (id) => {
        let newTodoData = todoData.map((data) => {
            if (data.id === id)
            data.completed = !data.completed;
            return data;
        })

        setTodoData(newTodoData);
    }

    return <div style={getStyle(completed)}>
                <input type="checkbox" checked={completed} onChange={() => handleCompleteChange(id)}/>
                {title}
                <button style={btnStyle} onClick={() => handleClick(id)}>X</button>
            </div>
}