# Codecademy Front-End Engineer path Challenge Project: Flashcards

## Description
This projects goal is to manage a flashcard-style quiz apps complex state with [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) using Codecademy's provided starter code. 

Although this app uses [React Router](https://reactrouter.com/en/main) for client-side routing, it is not part of the challenge. However, knowledge of how it works is helpful.

Live site: https://react-redux-flashcards.netlify.app/

## Setup Instructions
Extract __flashcards-starting-code-react-v18.zip__ and from the extracted folder run `npm install` to install dependencies.  

Start the server with `npm start` and visit http://localhost:3000/ 


## State
The state consists of 3 slices created using RTK `createSlice`. Each slice is responsible for updating/accessing its piece of state using the reducers/actions/selectors they generate:

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

[Create React App README](Create%20React%20App%20README.md)