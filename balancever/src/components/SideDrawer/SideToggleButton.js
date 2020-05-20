import React from 'react';
import './SideToggleButton.css';

const drawerToggleButton = props => (
    <button className='toggleButton' onClick={props.click}>
        <div className='toggleLine'/>
        <div className='toggleLine'/>
        <div className='toggleLine'/>
    </button>
);

export default drawerToggleButton;