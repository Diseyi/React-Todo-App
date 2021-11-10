import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import Form from "./components/Form";


function App(props) {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodo([
      ...todo,
      { text: input, id: Math.floor(Math.random() * 10000), completed: false },
    ]);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    console.log('you just rendered the component')
  }, [todo]);

  return (
    <div className="App">
      <Header />
      
      <Form
        input={input}
        handlesubmit={handleSubmit}
        setInput={setInput}
        handlechange={handleChange}
        todo={todo}
        setTodo={setTodo}
      />
      <div className="main-div">
      <AddTodo todo={todo} setTodo={setTodo} />
      </div>
    </div>
  );
}

export default App;
