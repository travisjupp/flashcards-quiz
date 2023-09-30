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
            },
        }
    }
);


export const selectQuizzes = state => state.quizzes.quizzes; // all quizzes selector
export const { addQuiz } = quizzesSlice.actions; // export actions
export default quizzesSlice.reducer; // export reducer
