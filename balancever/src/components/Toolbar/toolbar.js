import React from 'react';
import './Toolbar.css';

const Toolbar = props => (
    <header classNamee='toolbar'>
        <nav className='toolbarNav'>
            <div></div>
            <div className='toolbarLogo'><a href='/'> THE LOGO </a></div>
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

