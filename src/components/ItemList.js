import React, { Component } from 'react'

import Items from './Items'

class ItemList extends Component {
 render() {
   return (
       <div className="item-list">
       { this.props.currentView === 'toGet'
           ? <div>
             {this.props.itemsToGet.map( (item, index) => {
               return (
                 <Items
                   key={index}
                   item={item}
                   handleCheck={this.props.handleCheck}
                   arrayIndex={index}
                   currentArray='itemsToGet'
                 />
               )
             })}
             </div>
           : <div>
              {this.props.purchasedItems.map( (item, index) => {
                return (
                   <Items
                     key={index}
                     item={item}
                     handleCheck={this.props.handleCheck}
                     arrayIndex={index}
                     currentArray='purchasedItems'
                   />
                 )
              })}
             </div>
         }
      </div>
   )
 }
}


//           <Items />
//           this is the item list component
//         </div>
//     )
//   }
// }

export default ItemList
