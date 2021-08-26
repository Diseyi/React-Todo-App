import React from 'react'
import Todo from "./Todo";

const AddTodo = ({todo, setTodo}) => {
    
   
    return (
        <div>
           <ul className="list-container" > 
           {todo.map(todos => (
               <Todo text={todos.text} todo={todo} setTodo={setTodo} todos={todos} />
           ))}
           </ul>
        </div>
    )
}

export default AddTodo
