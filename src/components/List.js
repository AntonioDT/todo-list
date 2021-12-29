import React from "react";
import Todo from "./Todo"

const List = (props) => {
    return (
        <ul className="todo-list">
            {props.todoList.map(item => (
                <Todo 
                    key={item.id} 
                    item={item}
                    todoList={props.todoList}
                    setTodoList={props.setTodoList}
                />
            ))}
        </ul>
    );
}

export default List;