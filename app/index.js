import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { App } from './App'
import { store } from '../src'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)