import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Sidebar } from './'
import * as stores from '../stores'

export const Root = () => (
  <Provider store={stores.rootStore}>
    <Sidebar />
  </Provider>
)