import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";

function App(props) {
  const [todo, setTodo] = useState({
    value: "input.value",
    id: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  // const handleChange =(e) => {
  //   console.log(e.target.value)
  // }

  return (
    <div className="App">
      <Header />
      <form className="addtodo-form" onSubmit={handleSubmit}>
        <input type="text" name="text" className="input" onChange={props.submit} />
        <button type="submit" className="button">
          Add Todo
        </button>
      </form>
      <p>{todo.value}</p>
      <AddTodo />
    </div>
  );
}

export default App;
