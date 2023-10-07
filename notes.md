# Notes
## Final app state structure
```js
{
  topics: {
    topics: {
      '123': {
        id: '123',
        name: 'example topic',
        icon: 'icon url',
        quizIds: ['456']
      }
    }
  },
  quizzes: {
    quizzes: {
      '456': {
        id: '456',
        topicId: '123',
        name: 'quiz for example topic',
        cardIds: ['789', '101', '102']
      }
    }
  },
  cards: {
    cards: {
      '789': {
        id: '789',
        front: 'front text',
        back: 'back text'
      },
      '101': {
        id: '101',
        front: 'front text',
        back: 'back text'
      },
      '102': {
        id: '102',
        front: 'front text',
        back: 'back text'
      },
    }
  }
}
```

## Redux selectors with params

notes on passing arguments to a selector
```js

// card with a given id selector (ES6 Arrow function syntax)
export const selectCard = id => state => state.cards.cards[id];

// selectCard function declaration syntax (pre ES6)
export function selectCard(id){
  return function (state){
    return state.cards.cards[id]
    }
}

// calling: useSelector(selectCard(someIdVal)) or selectCard(someIdVal)(state)

```
  see => [cardsSlice.js](src/features/cards/cardsSlice.js)

  [more info on currying](https://en.wikipedia.org/wiki/Currying)

## Using another slices reducer to access current slices state
* import reducer defined in other slice
* add to `extraReducers` section

_note: this imported reducer will not be exported with the current slices actions (currentSlice.actions) but will perform duties on current slice when dispatched from originating slice._

  see => [topicsSlice.js](src/features/topics/topicsSlice.js) imports and extraReducers section(s)

---
For more info view the [README](./README.md) 

