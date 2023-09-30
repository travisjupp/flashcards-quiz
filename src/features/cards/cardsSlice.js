import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice(
    {
        name: 'cards',
        initialState: {
            cards: {
                // 123: {id: '123', front: 'front of card', back: 'back of card'}
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

export const selectCard = id => state => state.cards.cards[id]; // card with a given id selector
export const { addCard } = cardsSlice.actions; // export actions
export default cardsSlice.reducer; // export reducer