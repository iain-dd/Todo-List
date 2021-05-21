import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

//Importing Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //States
  const [inputTime, setInputTime] = useState("");
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const [reminderDate, setReminderDate] = useState();

  useEffect(() => {
    getLocalTodos();
  }, []);
  //UseEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  //Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //save to local
  const saveLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todolocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todolocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        reminderDate={reminderDate}
        selectedDate={selectedDate}
        inputTime={inputTime}
        inputText={inputText}
        todos={todos}
        setReminderDate={setReminderDate}
        setSelectedDate={setSelectedDate}
        setTodos={setTodos}
        setInputText={setInputText}
        setInputTime={setInputTime}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
