import React from 'react'

const Todo = ({text, todo, setTodo, id, todos}) => {

    const handleDelete = () => {
        
        setTodo(todo.filter(el => el.id !== todos.id))
    }

    return (
        <div>
            <div className="todo"  > 
            <li className="todo-li" > {text} </li>
            <button className="edit-button" >edit</button>
            <button className="delete-button" onClick={handleDelete} >delete</button>
            </div>
        </div>
    )
}

export default Todo
