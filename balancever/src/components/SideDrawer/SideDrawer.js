import React from 'react';
import './SideDrawer.css'
import SideLogo from '../../images/full-logo.png'
import {Link} from 'react-router-dom';

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
            <Link to='/structure'>
            <li>
                <a>STRUCTURE YOUR DAY</a>
            </li>
            </Link>

            <Link to='/view'>
            <li>
                <a>VIEW SCHEDULE</a>
            </li>
            </Link>

            <Link to='/copy'>
            <li>
                <a>COPY SCHEDULE</a>
            </li>
            </Link>

            <Link to='/score'>
            <li>
               <a>CHECK YOUR SCORE</a> 
            </li>
            </Link>

            <Link to='/share'>
            <li>
                <a>SHARE YOUR SCHEDULE</a>
            </li>
            </Link>

            <Link to='/explore'>
            <li>
                <a>EXPLORE ACTIVITIES</a>
            </li>
            </Link>

            <Link to='/contact'>
            <li>
                <a>CONTACT</a>
            </li>
            </Link>

        </ul>
    </nav>
    );
};

export default sideDrawer;