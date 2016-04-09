import { createStore, combineReducers } from 'redux'

export const rootStore = createStore(combineReducers({
  app: (state = { name: 'Root' }, action) => {
    return state
  }
}))

export const sidebarStore = createStore(combineReducers({
  items: (state = [{ text: 'HOME' }, { text: 'MUSIC' }], action) => {
    return state
  },
}))