import { useReducer } from 'react';
import {
    SET_TO_DO,
    ADD_TO_DO,
    DELETE_TO_DO
} from './constants';

export const initState = {
    todo: "",
    toDoList: []
}

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

export const useToDoReducer = () => {
    return useReducer(reducer, initState)
}

export default reducer;