import { CHOOSE_CARD } from "./constants";

export const chooseCard = (id, cardData) => ({
    type: CHOOSE_CARD,
    id,
    cardData
})