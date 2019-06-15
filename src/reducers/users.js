import { ADD_USER } from '../actions/constants';

let initialState = [
    {
        username: "Vasya",
        usersurname: "Sidorov",
        description: "Privet"
    }
]

const users = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return [
                ...state,
                {
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