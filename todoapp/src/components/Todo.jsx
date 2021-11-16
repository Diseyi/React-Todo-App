import React, { useState } from 'react';

const Todo = ({text, todo, setTodo, id, todos}) => {

    const [edit, setEdit] = useState("false");
    const [editButton, setEditButton] = useState("Edit");

    const handleDelete = () => {
        
        setTodo(todo.filter(el => el.id !== todos.id))
    }

    function handleEdit(){
        if (edit === "false"){
            setEdit("true");
            setEditButton("Exit");
        }else{
            setEdit("false");
            setEditButton("Edit");
        }
    }
    
    return (
        <div>
            <div className="todo"> 
                
                <div className="todo-li" contenteditable={edit}>
                    {text}
                </div>
                
                <button className="edit-button" onClick={handleEdit} >{editButton}</button>
                <button className="delete-button" onClick={handleDelete} >Delete</button>
            </div>
        </div>
    )
}

export default Todo
