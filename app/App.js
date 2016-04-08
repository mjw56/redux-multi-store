import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Sidebar } from './Sidebar'

const store = createStore(combineReducers({
  user: (state, action) => ({ name: 'Le App' })
}))

export const App = () => (
  <Provider store={store}>
    <Sidebar />
  </Provider>
)
render(<App />, document.getElementById('root'))