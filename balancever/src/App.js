import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar'; 
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className="App">
      <Toolbar user={user} signIn={signInWithGoogle} signOut={signOut} drawerClickHandler={this.drawerToggleClickHandler} />
      <SideDrawer show={this.state.sideDrawerOpen} />
      {backdrop}
      <p> This is a test paragraph </p>
      </div>
    );
  }
}

export default App;
