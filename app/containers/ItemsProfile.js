import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux-custom-store'
import { ItemsProfile } from '../components'

function profileAction(text) {
  return {
    type: 'PROFILE_TOGGLE',
    text
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ profileAction }, dispatch)
  }
}

export const ConnectedItemsProfile = connect(
  ({ app: { name } }) => ({ name }),
  mapDispatchToProps
)(ItemsProfile)
