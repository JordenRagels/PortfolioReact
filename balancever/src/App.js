import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar'; 
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
      <Router>
      <div className="App">
      <Toolbar user={user} signIn={signInWithGoogle} signOut={signOut} drawerClickHandler={this.drawerToggleClickHandler} />
      <SideDrawer show={this.state.sideDrawerOpen} />
      {backdrop}
          <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={Profile} />
          <Route path="/structure" component={StructureDay} />
          <Route path="/view" component={ViewSchedule} />
          <Route path="/copy" component={CopySchedule} />
          <Route path="/score" component={CheckScore} />
          <Route path="/share" component={ShareSchedule} />
          <Route path="/explore" component={ExploreActivites} />
          <Route path="/contact" component={Contact} /> 
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
