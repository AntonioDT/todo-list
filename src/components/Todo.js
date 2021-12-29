import React from "react";
import checkImg from "../images/check.png"
import trashImg from "../images/trash.png"

const Todo = (props) => {
    function checkHandler() {
        props.setTodoList(props.todoList.map(el => {
            if (el.id === props.item.id) {
                return {
                    ...el, completed: !el.completed
                }
            } return el;
        }));
    }
    function deleteHandler() {
        let newTodoList = props.todoList.filter(el => el.id !== props.item.id);
        props.setTodoList(props.todoList.map(el => {
            if (el.id === props.item.id) {
                return {
                    ...el, deleted: !el.deleted
                }
            } return el;
        }));
        setTimeout(() => {
            props.setTodoList(newTodoList);
        }, 500);
       
    }
    return (
        <li className={`flex ${props.item.completed ? "checked": ""} ${props.item.deleted ? "delete-animation": ""}`}>
            <div className="description">{props.item.description}</div>
            <button className="check" onClick={checkHandler}><img src={checkImg} alt="check"></img></button>
            <button className="trash" onClick={deleteHandler}><img src={trashImg} alt="trash"></img></button>
        </li>
    )
}

export default Todo;