import { createSlice } from "@reduxjs/toolkit";
// import another slices action creator to coordinate state changes across multiple slices
import { addQuiz } from "../quizzes/quizzesSlice";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {
            // '123456': {
            //     id: '123456',
            //     name: 'name of topic',
            //     icon: 'icon url',
            //     quizIds: []
            // }
        }
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: []
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addQuiz, (state, action) => { // listen for quizzesSlice's addQuiz action when dispatched
                // if topic doesen't exist early return
                if (state.topics[action.payload.topicId] === undefined) {
                    console.log(action.payload.topicId, 'no topic selected, no topic quizIds array updated');
                    return;
                }
                // add quiz id to the associated topics (topicId) quizIds array
                const quizIdExists = state.topics[action.payload.topicId].quizIds.includes(action.payload.id);
                // avoid adding duplicate quiz ids
                if (!quizIdExists) {
                    state.topics[action.payload.topicId].quizIds.push(action.payload.id);
                } else {
                    console.log('quiz id', action.payload.id, 'already exists');
                }
            })
    },
})


export const selectTopics = state => state.topics.topics; // all topics selector
export const { addTopic } = topicsSlice.actions; // export actions
export default topicsSlice.reducer; // export reducer
