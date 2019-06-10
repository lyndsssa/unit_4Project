import React, { Component } from 'react'

class Items extends Component {
 render() {
   return (
       <div className="items">
       <div className="grocery-item">{this.props.items.grocery_item}</div>
       <div className="item-actions">
         {this.props.item.purchased
           ? <i
             className="incomplete"
             onClick={() => {this.props.handleCheck(this.props.items, this.props.arrayIndex, this.props.currentArray)}}
             ></i>
           : <i
             className="complete"
             onClick={() => {this.props.handleCheck(this.props.items, this.props.arrayIndex, this.props.currentArray)}}
             ></i>
         }
         <i className="delete"></i>
       </div>
     </div>
   )
 }
}
//           this is the task component
//         </div>
//     )
//   }
// }
export default Items
