import { createStore } from 'redux'

const store = createStore(() => {
  return {
    store1: createStore(() => {
      return 'store 1 state'
    }),
    store2: createStore(() => {
      return 'store 2 state'
    }),
    store3: createStore(() => {
      return 'store 3 state'
    })
  }
});

const rootState = store.getState()

console.log(rootState.store1.getState())
console.log(rootState.store2.getState())
console.log(rootState.store3.getState())