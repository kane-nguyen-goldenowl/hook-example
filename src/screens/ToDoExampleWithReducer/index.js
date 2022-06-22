import React from 'react';

import './index.css';

import {
    useToDoReducer
} from './reducer';

import {
    setToDo,
    addToDo,
    deleteToDo
} from './actions';

function ToDoExample() {
    const [state, dispatch] = useToDoReducer();
    const {
        todo,
        toDoList
    } = state;

    function handleToDoChange(e) {
        console.log("handleToDoChange")
        dispatch(setToDo(e.target.value));
    }

    function handleToDoAdd() {
        console.log("handleToDoAdd")
        dispatch(addToDo(todo));
    }

    function handleToDoDelete(index) {
        console.log("handleToDoDelete", index)
        dispatch(deleteToDo(index));
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
                ToDo Example
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