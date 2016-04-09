import React, { PropTypes } from 'react'

export const ItemsProfile = ({ name, actions }) => {
  return (
    <div>
      <h2>{name}</h2>
      <button onClick={actions.profileAction} >ItemsProfile Action</button>
    </div>
  )
}
ItemsProfile.propTypes = {
  name: PropTypes.string.isRequired
}