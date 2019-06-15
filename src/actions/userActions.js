import { ADD_USER, CHOOSE_USER } from './constants';

export const addUser = data => ({
    type: ADD_USER,
    data
})

export const chooseUser = (id, userData) => ({
    type: CHOOSE_USER,
    id,
    userData
})