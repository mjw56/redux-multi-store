import React, { PropTypes } from 'react'

export const ItemsList = ({ items, actions }) => {
  return (
    <div>
      <button onClick={actions.itemsAction}>ItemsList Action</button>
      <ul>
        {(items || []).map(({ text }, i) => (<li key={i}>{text}</li>))}
      </ul>
    </div>
  )
}
ItemsList.propTypes = {
  items: PropTypes.array.isRequired
}