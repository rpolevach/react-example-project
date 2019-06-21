import { CHOOSE_CARD, SHAKE_CARDS } from "./constants";

export const chooseCard = (id, cardData) => ({
    type: CHOOSE_CARD,
    id,
    cardData
})

export const shakeCards = () => ({
    type: SHAKE_CARDS,
})