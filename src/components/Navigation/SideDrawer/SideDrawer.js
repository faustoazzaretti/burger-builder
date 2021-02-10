import './SideDrawer.css';
import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = (props) => {
    //...
    return (
        <div className="SideDrawer">
            <Logo height="11%" />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default sideDrawer;