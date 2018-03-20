import React, { Component } from 'react';
import Items from './../../../Items/';
import Cart from './../../../Cart/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="totalContainer">
          <Cart/>
        </div>
        <div className="productsContainer">
          <Items/>
        </div>
        
      </div>
    );
  }
}

export default App;