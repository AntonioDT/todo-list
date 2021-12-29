import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from "./components/List";
import './style/App.css';

function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);

  //Use effect con un array vuoto come secondo parametro
  //viene esguito solo una volta, ovvero all'avvio dell'applicazione
  useEffect( () => {
    getLocalItems();
  }, []);

  //Le funzioni dentro use effect vengono eseguite ogni volta che cambia todoList
  useEffect( () => {
    saveToLocal();
  }, [todoList]);

  function saveToLocal() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }

  function getLocalItems() {
    if (localStorage.getItem("todoList") === null) {
      localStorage.setItem("todoList", JSON.stringify([]));
    } else {
      let localItems = JSON.parse(localStorage.getItem("todoList"));
      setTodoList(localItems);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
      </header>
      <Form 
        inputText={inputText} 
        setInputText={setInputText}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <List 
        todoList={todoList}
        setTodoList={setTodoList}
      />
    </div>
  );
}

export default App;
