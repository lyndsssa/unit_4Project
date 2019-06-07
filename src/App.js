import React from 'react';

/// components ///
import Header from './components/Header'
import TaskList from './components/ItemList'
import Form from './components/Form'

function App() {
  return (
    <div className="main-container">
      <Header />
      <Form />
      <ItemList />
     <h1>Grocery List</h1>
    </div>
  );
}



export default App;
