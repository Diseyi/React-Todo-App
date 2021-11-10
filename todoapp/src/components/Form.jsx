import React from "react";

const Form = ({input, setInput, todo, setTodo, handlesubmit, handlechange}) => {

  return (
    <div>
      <form className="addtodo-form" >
        <input type="text" name="text" className="input"  placeholder="Add a todo..." onChange={handlechange} value={input} required="required" />
        <button type="submit" className="button" onClick={handlesubmit} >
          Add Todo 
        </button>
      </form>
    </div>
  );
};

export default Form;
