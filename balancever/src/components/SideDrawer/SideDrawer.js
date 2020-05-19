import React from 'react';
import './SideDrawer.css'
import SideLogo from '../../images/full-logo.png'

const sideDrawer = props => (
    <nav className='side-drawer'>
    <div className='sideDrawerLogo'>
            <a href='/'>
            <img src= { SideLogo } alt='logo'></img>
            </a>
            </div>
        <ul>
            <li>
                <a href='/'>Structure Your Day</a>
            </li>
            <li>
                <a href='/'>View Schedule</a>
            </li>
            <li>
                <a href='/'>Copy Schedule</a>
            </li>
            <li>
               <a href='/'>Check Your Score</a> 
            </li>
            <li>
                <a href='/'>Share Your Schedule</a>
            </li>
            <li>
                <a href='/'>Explore Activities</a>
            </li>
            <li>
                <a href='/'>Contact</a>
            </li>
        </ul>
    </nav>
);

export default sideDrawer;