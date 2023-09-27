# All together, your app state will look like this:
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
# Redux selectors with params
```js
// call: selectCard(id)(state) or useSelector(selectCard(someIdVal))
export const selectCard = id => state => state.cards.cards[Object.keys(state.cards.cards).find((el)=>el===id)];

export const selectCard = id => state => state.cards.cards[id];

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
```

# using an action in one slice from another
* import action defined in other slice
* add to extraReducers section
see => `topicSlice.js` line 36
