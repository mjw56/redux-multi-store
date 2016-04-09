import React, { PropTypes } from 'react'
import { connect } from 'react-redux-custom-store'
import { bindActionCreators } from 'redux'
import { ConnectedItemsList, ConnectedItemsProfile } from './'

export const Main = () => (
  <div>
    <ConnectedItemsProfile />
    <ConnectedItemsList />
  </div>
)