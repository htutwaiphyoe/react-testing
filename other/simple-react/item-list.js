import React from 'react'

function ItemList({items}) {
  return items.length ? (
    <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>
  ) : (
    <span><strong>no</strong> items</span>
  )
}

export default ItemList
