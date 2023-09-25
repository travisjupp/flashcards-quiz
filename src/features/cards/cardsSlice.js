import { createSlice } from "@reduxjs/toolkit";

// create a new file containing slice for cards that:

// Is named 'cardsSlice'
// Has initial state consisting of an object that includes one property, cards, which corresponds to an empty object. This inner cards object will eventually hold all cards keyed by id.
// Has an addCard action. This action will receive a payload of the form { id: '123', front: 'front of card', back: 'back of card'}.
// Has a selector that returns a card with the given id.
// Is added to the store.

export const cardsSlice = createSlice(
    {
        name: 'cards',
        initialState: {
            cards: {
                123: {id: '123', front: 'front of card', back: 'back of card'}
            }
        },
        reducers: {
            addCard: (state, action) => {
                state.cards[action.payload.id] = {
                    id: action.payload.id,
                    front: action.payload.front,
                    back: action.payload.back
                }
            }

        }
    }
);
// returns card with given id
export const selectCard = id => state => id === state.cards.id;
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;


/* Note on using selectors with parameters
unfortunately, selector function accepts only store's state as argument. I would consider to use a currying approach to tackle the issue:

export const getProductNameById = id => store => {
  return store.dashboard.dashboards.filter(({ Id }) => Id === id)[0]
    .Name;
}
some file

import { useSelector } from "react-redux";
import { getProductNameById } from "./selectors";

const productId = 25;
const productName = useSelector(getProductNameById(productId));
*/