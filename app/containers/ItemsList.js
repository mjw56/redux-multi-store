import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux-custom-store'
import { ItemsList } from '../components'

function itemsAction(text) {
  return {
    type: 'ITEMS_TOGGLE',
    text
  }
}

function mapDispatchToItemsProps(dispatch) {
  return {
    actions: bindActionCreators({ itemsAction }, dispatch)
  }
}

export const ConnectedItemsList = connect(
  ({ items }) => ({ items }),
  mapDispatchToItemsProps
)(ItemsList, 'sidebar')
