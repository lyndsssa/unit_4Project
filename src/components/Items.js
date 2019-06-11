import React, { Component } from 'react'

class Items extends Component {
    render() {
        console.log('Inside Items:render: (this.props)', this.props)
        return (
           <div className="items">
               <div className="grocery-item">
                   <h4>{this.props.item.grocery}
                       <div className="item-actions">
                             {this.props.item.purchased === 't'
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
                   <ul className="itemInfo">
                      <li><span className="bold"> Brand: </span>{this.props.item.brand}</li>
                      <li><span className="bold"> Size: </span> {this.props.item.size}</li>
                      <li><span className="bold"> Quantity: </span> {this.props.item.quantity}</li>
                  </ul>
               </div>
           </div>
       )
   }
}

export default Items
