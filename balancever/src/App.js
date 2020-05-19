import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar'; 
import SideDrawer from './components/SideDrawer/SideDrawer'

class App extends Component {
  render() {
     return (
    <div className="App">
      <Toolbar/>
      <SideDrawer />
      <p> This is a test paragraph </p>
    </div>
  );
  }
}

export default App;
