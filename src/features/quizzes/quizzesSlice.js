// To start, create in the src/features/quizzes directory, create a new file containing a slice for quizzes that:

// Is named 'quizzesSlice'
// Has initial state consisting of an object that includes one property, quizzes, which corresponds to an empty object. This inner quizzes object will eventually hold all quizzes keyed by id.

// Has an addQuiz action. This action will receive a payload of the form { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}.
// Has a selector which returns all quizzes from state.
// Export the selector as well as the action creators and reducer that your slice generates.
// Is added to the store.
import { createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice(
    {
        name: 'quizzes',
        initialState: {
            quizzes: {
            }
        },
        reducers: {
            addQuiz: (state, action) => {
                state.quizzes[action.payload.id] = {
                    id: action.payload.id,
                    name: action.payload.name,
                    topicId: action.payload.topicId,
                    cardIds: action.payload.cardIds
                }
            }
        }
    }
);

// all quizzes selector
export const selectQuizzes = state => state.quizzes.quizzes;
export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;
