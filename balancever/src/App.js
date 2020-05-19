import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar'; 

class App extends Component {
  render() {
     return (
    <div className="App">
      <Toolbar/>
      <p> This is a test paragraph </p>
    </div>
  );
  }
}

export default App;
