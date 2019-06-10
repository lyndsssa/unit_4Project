import React, { Component } from 'react'

// class Form extends Component {
//   render() {
//     return (
//         <div className="form">
//           this is the form component
//         </div>
//     )
//   }
// }
//
// export default Form
class Form extends Component {
 constructor(props) {
   super(props)
   this.state = {
     grocery_item: '',
     completed:false
   }
 }

 handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleCreateTask(this.state)
    this.clearForm()
 }

 handleChange = (e) => {
    this.setState({grocery_item: e.target.value})
 }

 clearForm = () => {
   this.setState({ grocery_item: '' })
 }

 render () {
   return (
     <div className="form" onSubmit={this.handleSubmit}>
        <form>
         <input type='text'
           value={this.state.grocery_item}
           onChange={this.handleChange}
           placeholder="Create/ Add a new item to the list"
           />
         <button type="submit" className="submit-button"><i className="fas fa-plus"></i></button>
        </form>
      </div>
   )
 }
}

export default Form;
