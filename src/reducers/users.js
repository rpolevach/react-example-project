import { ADD_USER } from '../actions/constants';

const users = (state = [], action) => {
    switch (action.type) {
        case ADD_USER:
            return [
                ...state,
                {
                    name: action.username,
                    surname: action.usersurname,
                    description: action.description
                }
            ];
        default:
            return state;   
    }
}

export default users;