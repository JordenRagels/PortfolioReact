import React from 'react';
import './Toolbar.css';
import Logo from '../../images/logo.png'
import '../SideDrawer/SideToggleButton'
import DrawerToggleButton from '../SideDrawer/SideToggleButton';

const Toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbarNav'>
            <div>
                < DrawerToggleButton />
            </div>
            <div className='toolbarLogo'>
            <a href='/'>
            <img src= { Logo } alt='logo'></img>
            </a>
            </div>
            <div className='spacer'></div>
            <div className='toolbarNavItems'>
                <ul>
                    <li><a href="/">Login</a></li>
                    <li><a href="/">Profile</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;

