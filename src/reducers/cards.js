import shortid from 'shortid';

import { CHOOSE_CARD, SHAKE_CARDS } from '../actions/constants';

const compareRandom = (a, b) => {
    return Math.random() - 0.5;
}

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
    },
    {
        id: shortid.generate(),
        name: "Chuck Norris",
        data: "{joke]"
    }
];

const cards = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSE_CARD:
            const index = state.findIndex(card => card.id === action.id);
            action.cardData.id = state[index].id;
            action.cardData.name = state[index].name;
            return state;
        case SHAKE_CARDS:
            return state.sort(compareRandom);
        default:
            return state;
    }
}

export default cards;
