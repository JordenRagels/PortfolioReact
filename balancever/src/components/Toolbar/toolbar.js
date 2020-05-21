import React from 'react';
import './Toolbar.css';
import Logo from '../../images/logo.png'
import '../SideDrawer/SideToggleButton'
import 'firebase/auth';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';
import DrawerToggleButton from '../SideDrawer/SideToggleButton';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const Toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbarNav'>
            <div>
                < DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className='toolbarLogo'>
            <a href='/'>
            <img src= { Logo } alt='logo'></img>
            </a>
            </div>
            <div className='spacer'></div>
            <div className='toolbarNavItems'>
                <ul>
                {
            props.user
              ? <p>Hello, {props.user.displayName}</p>
              : <p>Please sign in.</p>
          }

          {
            props.user
              ? <button onClick={props.signOut}>Logout</button>
              : <button onClick={props.signInWithGoogle}>Login</button>
          }
                    <li><a href="/">Profile</a></li>
                </ul>
            </div>
        </nav>
    </header>

    
);
export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(Toolbar);

