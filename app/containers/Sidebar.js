import React from 'react'
import { createStore, combineReducers } from 'redux'
import { createProvider } from 'react-redux-custom-store'
import { Main } from './Main'
import * as stores from '../stores'

const Provider = createProvider('sidebar')

export const Sidebar = () => (
  <Provider store={stores.sidebarStore}>
    <Main />
  </Provider>
)