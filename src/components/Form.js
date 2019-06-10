import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            grocery_item: '',
            completed:false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearForm = this.clearForm.bind(this)
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
           value={this.state.grocery}
           onChange={this.handleChange}
           placeholder="grocery item"
         />
         <input type='text'
           value={this.state.brand}
           onChange={this.handleChange}
           placeholder="item brand"
         />
         <input type='text'
           value={this.state.size}
           onChange={this.handleChange}
           placeholder="size"
         />
         <input type='text'
           value={this.state.quantity}
           onChange={this.handleChange}
           placeholder="quantity"
         />
         <button type="submit" className="submit-button"><i className="fas fa-plus"></i></button>
        </form>
      </div>
   )
 }
}

export default Form;
