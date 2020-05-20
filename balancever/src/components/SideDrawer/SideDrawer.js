import React from 'react';
import './SideDrawer.css'
import SideLogo from '../../images/full-logo.png'

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses = ['side-drawer open']
    }

    return ( 
    <nav className={drawerClasses}>
        <div className='sideDrawerLogo'>
            <a href='/'>
            <img src= { SideLogo } alt='logo'></img>
            </a>
        </div>
        <ul>
            <li>
                <a href='/'>STRUCTURE YOUR DAY</a>
            </li>
            <li>
                <a href='/'>VIEW SCHEDULE</a>
            </li>
            <li>
                <a href='/'>COPY SCHEDULE</a>
            </li>
            <li>
               <a href='/'>CHECK YOUR SCORE</a> 
            </li>
            <li>
                <a href='/'>SHARE YOUR SCHEDULE</a>
            </li>
            <li>
                <a href='/'>EXPLORE ACTIVITIES</a>
            </li>
            <li>
                <a href='/'>CONTACT</a>
            </li>
        </ul>
    </nav>
    );
};

export default sideDrawer;