import React, { PropTypes } from 'react'
import { connect } from 'react-redux-custom-store'

const ItemProfile = ({ name }) => (
  <h2>{name}</h2>
)
ItemProfile.propTypes = {
  name: PropTypes.string.isRequired
}

const ItemsList = ({ items }) => (
  <ul>
    {(items || []).map(({ text }, i) => (<li key={i}>{text}</li>))}
  </ul>
)
ItemsList.propTypes = {
  items: PropTypes.array.isRequired
}

const ConnectedItemProfile = connect(
  ({ user: { name } }) => ({ name })
)(ItemProfile)

const ConnectedItemsList = connect(
  ({ items }) => ({ items })
)(ItemsList, 'sidebar')


export const Main = () => (
  <div>
    <ConnectedItemProfile />
    <ConnectedItemsList />
  </div>
)