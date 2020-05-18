import React, {Component} from 'react';
import './App.css';
import toolbar from './components/Toolbar/toolbar';

class App extends Component() {
  render() {
     return (
    <div className="App">
      <toolbar/>
    </div>
  );
  }
}

export default App;
