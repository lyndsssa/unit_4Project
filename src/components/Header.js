//Remember, for components we always need React and the Component class
import React, { Component } from 'react'

class Header extends Component {
 render() {
   return (
       <div className="header">
       {/* TODO */}
<li onClick={() => {this.props.handleView('toGet')}}>
 {this.props.toGetCount} TOGET
</li>
{/* COMPLETED */}
<li onClick = {() => {this.props.handleView('purchased')}}>
 {this.props.purchasedItemsCount} PURCHASED
</li>
       </div>
   )
 }
}

export default Header
