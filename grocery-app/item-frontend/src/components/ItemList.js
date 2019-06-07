import React, { Component } from 'react'

import Items from './Items'

class ItemList extends Component {
  render() {
    return (
        <div className="item-list">
          <Items />
          this is the item list component
        </div>
    )
  }
}

export default ItemList
