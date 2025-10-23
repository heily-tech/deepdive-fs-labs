import {useState} from "react";


export default function List({id, title, completed, todoData, setTodoData}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

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

    const handleEditChange = (e) => {
        setEditedTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodoData = todoData.map((data) => {
            if (data.id === id) {
                data.title = editedTitle
            }
            return data;
        })

        setTodoData(newTodoData);
        setIsEditing(false);
    }

    if (isEditing) {
        return (
            <div>
                <form style={getStyle(completed)} onSubmit={handleSubmit}>
                    <input
                        value={editedTitle}
                        autoFocus
                        onChange={handleEditChange}
                    />
                    <button type="button" style={btnStyle} onClick={() => setIsEditing(false)}>X</button>
                    <button type="submit" style={btnStyle}>Save</button>
                </form>
            </div>
        )
    } else {
        return <div style={getStyle(completed)}>
                <input type="checkbox" checked={completed} onChange={() => handleCompleteChange(id)}/>
                {title}
                <button style={btnStyle} onClick={() => handleClick(id)}>X</button>
                <button style={btnStyle} onClick={() => setIsEditing(true)}>Edit</button>
            </div>
    }

    
}