import shortid from 'shortid';

import { CHOOSE_CARD } from '../actions/constants';

let initialState = [
    {
        id: shortid.generate(),
        name: "Github",
        data: '{avatar_url, followers, id, login, name, type...}'
    },
    {
        id: shortid.generate(),
        name: "Rick and Morty",
        data: '{characters}'
    },
    {
        id: shortid.generate(),
        name: "Breaking Bad",
        data: '{quote}'
    }
];

const cards = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSE_CARD:
            const index = state.findIndex(card => card.id === action.id);
            action.cardData.id = state[index].id;
            action.cardData.name = state[index].name;
            return state;
        default:
            return state;
    }
}

export default cards;
