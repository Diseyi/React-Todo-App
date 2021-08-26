import React from 'react'

const Todo = ({text, todo, setTodo, id, todos}) => {

    const handleDelete = () => {
        
        setTodo(todo.filter(el => el.id !== todos.id))
    }

//     const handleComplete = () => {
// setTodo(todo.map((item) => {
//     if(item.id === todos.id) {
//         return {
//             ...item, completed : !item.completed
//         }
//     }
// return item
// }))
// console.log({todos});

//     }

    return (
        <div>
            <div className="todo"  > 
            <li className="todo-li" > {text} </li>
            <button className="delete-button" onClick={handleDelete} >delete</button>
            </div>
        </div>
    )
}

export default Todo
