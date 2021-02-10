import './DrawerToogle.css';
import React from 'react';

const drawerToogle = (props) => (
    <div className="DrawerToggle" onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div >

);

export default drawerToogle;