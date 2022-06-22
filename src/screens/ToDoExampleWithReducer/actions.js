import {
    SET_TO_DO,
    ADD_TO_DO,
    DELETE_TO_DO
} from './constants';

export const setToDo = (payload) => {
    return {
        type: SET_TO_DO,
        payload
    }
}

export const addToDo = (payload) => {
    return {
        type: ADD_TO_DO,
        payload
    }
}

export const deleteToDo = (payload) => {
    return {
        type: DELETE_TO_DO,
        payload
    }
}