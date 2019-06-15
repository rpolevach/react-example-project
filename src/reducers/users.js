import shortid from 'shortid';

import { ADD_USER } from '../actions/constants';

let initialState = [
    {
        id: shortid.generate(),
        name: "Vasya",
        surname: "Sidorov",
        description: "Privet"
    }
]

const users = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return [
                ...state,
                {
                    id: shortid.generate(),
                    name: action.data.username,
                    surname: action.data.usersurname,
                    description: action.data.description
                }
            ];
        default:
            return state;   
    }
}

export default users;