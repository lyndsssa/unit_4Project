import React, {Component} from 'react';

/// components ///
import Header from './components/Header'
import ItemList from './components/ItemList'
import Form from './components/Form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: 'items'
    }
  }
  render(){
  return (
    <div className="main-container">
    <h1>Grocery List</h1>
    <h2>You will never forget it again </h2>
      <Header
      currentView={this.state.currentView}
       />
      <Form />
      <ItemList
      currentView={this.state.currentView}
      />
    </div>
  );
}
}



export default App;
