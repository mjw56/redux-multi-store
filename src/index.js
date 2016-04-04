import { createStore, combineReducers } from 'redux'

var rootReducer = function() {
  let reducer = {
    store1: createStore((state = 'hello store 1') => {
      console.log(store)
      return state
    }),
    store2: createStore((state = 'hello store 2') => {
      console.log(state)
      return state
    }),
    store3: createStore((state = 'hello store 3') => {
      console.log(state)
      return state
    })
  }

  return reducer
}

let originalReducers = rootReducer()
export var store = createStore(rootReducer);

// store.replaceReducer(() => Object.assign({}, originalReducers, {
//   store3: createStore((state = 'hello store 3') => {
//     console.log(state)
//     return state
//   })
// }))

// originalReducers.store3 = createStore((state = 'hello store 3') => {
//   console.log(state)
//   return state
// })

// store.replaceReducer(() => originalReducers)