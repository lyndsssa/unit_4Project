import React, { Component } from 'react'

class Items extends Component {
    render() {
        console.log('Insize Items:render: (this.props)', this.props)
        return (
           <div className="items">
               <div className="grocery-item">
                   <h4>{this.props.item.grocery}
                       <div className="item-actions">
                             {this.props.item.purchased
                               ? <i
                                 className="incomplete far fa-check-square"
                                 onClick={() => {this.props.handleCheck(this.props.item, this.props.arrayIndex, this.props.currentArray)}}
                                 ></i>
                               : <i
                                 className="complete far fa-square"
                                 onClick={() => {this.props.handleCheck(this.props.item, this.props.arrayIndex, this.props.currentArray)}}
                                 ></i>
                             }
                             <i
                                className="delete far fa-trash-alt"
                                onClick={ () => { this.props.handleDelete(this.props.item.id, this.props.arrayIndex, this.props.currentArray) }}
                            ></i>
                       </div>
                   </h4>
                   <ul>
                       <li>{this.props.item.brand}</li>
                       <li>{this.props.item.size}</li>
                       <li>{this.props.item.quantity}</li>
                  </ul>
               </div>
           </div>
       )
   }
}

export default Items
