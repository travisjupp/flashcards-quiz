// 5.
// Your first task is to write code to manage the state associated with topics. In the src/features/topics directory, create a new file containing a slice that:

import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";
// import { addQuizId } from "../quizzes/quizzesSlice";
// import { quizzesSlice } from "../quizzes/quizzesSlice";
// Is named topicsSlice.
// Has initial state consisting of an object that includes one property, topics, which corresponds to an empty object. This inner topics object will eventually hold all topics keyed by id.
// Has an addTopic action. You can expect the payload for this action to look like {id: '123456', name: 'name of topic', icon: 'icon url'}. Store these values in the state as a new topic object.
// Each topic object added to the state should also have a quizIds property, which will correspond to an array containing the ids of each quiz associated with the topic. When a topic is first created, it won’t have any associated quizzes, but you should still create an empty quizIds array so that all topics in the state conform to the same shape.
// Create a selector that selects the topics object nested within initialState.
// Export the selector as well as the action creators and reducer that your slice generates.


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
        .addCase(addQuiz, (state, action) => {
            // if topic doesen't exist do nothing
            if (state.topics[action.payload.topicId] === undefined) {
                console.log(state.topics[action.payload.topicId], 'undefined, quizIds not updated');
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
    // extraReducers: {
    //     // You’ll want to make use of the topicsSlice‘s extraReducers to respond to a quizzesSlice "addQuiz" action.
    //     // adds a quiz’s id to the quizIds array of the topic with which the newly created quiz is associated. This action will receive the same payload the quizzes slice addQuiz action received in the form { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}
    //     [addQuiz]: (state, action) => {
    //         // if topic doesen't exist do nothing
    //         if (state.topics[action.payload.topicId] === undefined) {
    //             console.log(state.topics[action.payload.topicId], 'undefined, quizIds not updated');
    //             return;
    //         }
    //         // add quiz id to the associated topics (topicId) quizIds array
    //         const quizIdExists = state.topics[action.payload.topicId].quizIds.includes(action.payload.id);
    //         // avoid adding duplicate quiz ids
    //         if (!quizIdExists) {
    //             state.topics[action.payload.topicId].quizIds.push(action.payload.id);
    //         } else {
    //             console.log('quiz id', action.payload.id, 'already exists');
    //         }
    //     }
    // }
})

// topics selector
export const selectTopics = state => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;