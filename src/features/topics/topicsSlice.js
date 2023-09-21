// 5.
// Your first task is to write code to manage the state associated with topics. In the src/features/topics directory, create a new file containing a slice that:

import { createSlice } from "@reduxjs/toolkit";

// Is named topicsSlice.
// Has initial state consisting of an object that includes one property, topics, which corresponds to an empty object. This inner topics object will eventually hold all topics keyed by id.
// Has an addTopic action. You can expect the payload for this action to look like {id: '123456', name: 'name of topic', icon: 'icon url'}. Store these values in the state as a new topic object.
// Each topic object added to the state should also have a quizIds property, which will correspond to an array containing the ids of each quiz associated with the topic. When a topic is first created, it won’t have any associated quizzes, but you should still create an empty quizIds array so that all topics in the state conform to the same shape.
// Create a selector that selects the topics object nested within initialState.
// Export the selector as well as the action creators and reducer that your slice generates.

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
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

    }
}
);

export const selectTopics = state => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;