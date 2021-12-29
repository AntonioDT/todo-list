import React from "react";


const Form = (props) => {
    function inputTextHandler(e) {
        props.setInputText(e.target.value); 
    }
    function addThingToDo(e) {
        e.preventDefault();
        if (props.inputText === "") {
            return;
        }
        let id = 0;
        props.todoList.forEach(() => {
            id++;
        });
        let todoItem = {
            description: props.inputText,
            completed: false,
            deleted: false,
            id: id
        }
        props.setTodoList([...props.todoList, todoItem])
        props.setInputText("");
    }
    return (
        <form className="todo-form flex flex-center">
            <input value={props.inputText} onChange={inputTextHandler}></input>
            <button onClick={addThingToDo} className="add-btn">+</button>
        </form>
    );
}

export default Form;