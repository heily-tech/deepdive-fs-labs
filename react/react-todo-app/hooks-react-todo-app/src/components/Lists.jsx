export default function Lists({todoData, setTodoData}) {
    const btnStyle = {
        color: '#fff',
        border: 'none',
        padding: '4px 9px',
        borderRadius: '31%',
        cursor: 'pointer',
        float: 'right'
    }

    const getStyle = (completed) => {
        return {
            padding: '7px',
            borderBottom: '1px rgba(197, 224, 226, 1) dotted',
            textDecoration: completed ? 'line-through' : 'none'
        }
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

    return <div>
        {todoData.map(
            (data) => (
            <div style={getStyle(data.completed)} key={data.id}>
                <input type="checkbox" checked={data.completed} onChange={() => handleCompleteChange(data.id)}/>
                {data.title}
                <button style={btnStyle} onClick={() => handleClick(data.id)}>X</button>
            </div>
            )
        )}
    </div>
}