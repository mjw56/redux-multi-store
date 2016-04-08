import React from 'react'
import { createStore, combineReducers } from 'redux'
import { createProvider } from 'react-redux-custom-store'
import { Main } from './Main'

const sidebarStore = createStore(combineReducers({
  items: (state, action) => [{ text: 'HOME' }, { text: 'MUSIC' }],
}))
const Provider = createProvider('sidebar')

export const Sidebar = () => (
  <Provider store={sidebarStore}>
    <Main />
  </Provider>
)