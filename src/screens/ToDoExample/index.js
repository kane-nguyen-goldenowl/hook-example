import React, {
    useState,
} from 'react';

import './index.css';

function ToDoExample() {
    const [toDoList, setToDoList] = useState([]);
    const [todo, setTodo] = useState("");

    function handleToDoChange(e) {
        console.log("handleToDoChange")
        setTodo(e.target.value);
    }

    function handleToDoAdd() {
        console.log("handleToDoAdd")
        setToDoList([...toDoList, todo]);
        setTodo("");
    }

    function handleToDoDelete(index) {
        console.log("handleToDoDelete", index)
        toDoList.splice(index, 1)
        setToDoList([...toDoList]);
    }

    function handleSubmitForm(event) {
        if (event.keyCode === 13) handleToDoAdd();
    }

    function renderToDoList() {
        console.log("renderToDoList", toDoList)
        return toDoList.map((item, index) =>
        (
            <li key={index} >
                {item}
                <span
                    className="todo-delete-btn"
                    onClick={() => {
                        handleToDoDelete(index)
                    }}> [DELETE] </span>
            </li >
        )
        )
    }

    return (
        <div className="todo-container">
            <div className="todo-title">
                ToDo Example With Reducer
            </div>
            <div className="todo-form">
                <input
                    value={todo}
                    autoFocus={true}
                    placeholder="Enter new todo"
                    onKeyUp={handleSubmitForm}
                    onChange={handleToDoChange}>
                </input>
                <button onClick={handleToDoAdd}>
                    Add
                </button>
            </div >
            <div className="todo-list">
                <div>List: </div>
                <ul>
                    {renderToDoList()}
                </ul>
            </div>
        </div >
    );
}


export default ToDoExample;