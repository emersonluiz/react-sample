import React, { Component } from 'react';
import './css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
