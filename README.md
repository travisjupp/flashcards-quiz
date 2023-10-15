# Challenge Project: Flashcards

[![Netlify Status](https://api.netlify.com/api/v1/badges/3e2e7697-379d-4738-a740-6f086429bc11/deploy-status)](https://app.netlify.com/sites/react-redux-flashcards/deploys)

## Description
This projects goal is to manage a flashcard-style quiz apps complex state with [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) using Codecademy's provided starter code. 

Although this app uses [React Router](https://reactrouter.com/en/main) for client-side routing, it is not a challenge requirement. However, knowledge of how it works is helpful.

Live site: https://react-redux-flashcards.netlify.app/

## Setup Instructions
Extract __flashcards-starting-code-react-v18.zip__ and from the extracted folder run `npm install` to install dependencies.  

Start the server with `npm start` and visit http://localhost:3000/ 

## Technologies

* npm v. 8.19.2
* @reduxjs/toolkit v. 1.9.5
* react-dom v. 18.2.0
* react-redux v. 8.1.2
* react-router-dom v. 6.16.0
* react-scripts v. 5.0.1
* react v. 18.2.0
* uuid v. 8.3.2

## State
The application state consists of 3 slices created using RTK `createSlice`. Each slice is responsible for managing its piece of state using the reducers/actions/selectors they generate:

* topicsSlice
  * stores topics keyed by id `'ID': {id: 'ID', name: 'NAME', icon: 'icon url', quizIds: []}`
  * exports `addTopic` action for adding topics
  * adds quiz ids to topics when `addQuiz` is dispatched
  * exports `selectTopics` selector for selecting all topics

* quizzesSlice
  * stores quizzes keyed by id `'ID': {id: 'ID', name: 'NAME', topicId: 'topic ID', cardIds: []}`
  * exports `addQuiz` action for adding quizzes
  * exports `selectQuizzes` selector for selecting all quizzes

* cardsSlice
  * stores cards keyed by id `'ID': {id: 'ID', front: 'card front', back: 'card back'}`
  * exports `addCard` action for adding cards
  * exports `selectCard` selector for selecting a card with a given id

## Components

* Topics
  * uses `selectTopics` to list all topics
  * Route path `/topics`
  * topics displayed link to Topic component

* Topic
  * uses `selectQuizzes`/`selectTopics` to list quizzes associated with current topic
  * Route path `/topics/:topicId`
  * quizzes displayed link to Quiz component


* Quizzes
  * uses `selectQuizzes` to display all quizzes
  * Route path `/quizzes`
  * quizzes displayed link to Quiz component

* Quiz
  * uses `selectQuizzes` to display cards 
  * Route path `/quizzes/:quizId`

* Card
  * uses `selectCard` to display card front/back
  * Route path `none`

* NewQuizForm
  * form for creating new quizzes 
  * uses `selectTopics` to display topics in drop-down list
  * dispatches `addQuiz` and `addCard`
  * Route path `/quizzes/new`

* NewTopicForm
  * form for creating new topics
  * dispatches `addTopic`
  * Route path `/topics/new`


[Notes](./notes.md)

[Create React App README](create-react-app-readme.md)