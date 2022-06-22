import React, {
    useReducer,
} from 'react';

import './index.css';

// Init State
const initState = {
    todo: "",
    toDoList: []
}
// Action
const SET_TO_DO = 'SET_TO_DO';
const ADD_TO_DO = 'ADD_TO_DO';
const DELETE_TO_DO = 'DELETE_TO_DO';
const setToDo = (payload) => {
    return {
        type: SET_TO_DO,
        payload
    }
}

const addToDo = (payload) => {
    return {
        type: ADD_TO_DO,
        payload
    }
}

const deleteToDo = (payload) => {
    return {
        type: DELETE_TO_DO,
        payload
    }
}
// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case SET_TO_DO:
            return {
                ...state,
                todo: action.payload
            }
        case ADD_TO_DO:
            return {
                ...state,
                todo: "",
                toDoList: [
                    ...state.toDoList,
                    action.payload
                ]
            }
        case DELETE_TO_DO:
            const newToDoList = [...state.toDoList];
            newToDoList.splice(action.payload, 1);
            return {
                ...state,
                toDoList: newToDoList
            }
        default:
            return state;
    }
}
// Dispatch

function ToDoExample() {
    const [state, dispatch] = useReducer(reducer, initState);
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