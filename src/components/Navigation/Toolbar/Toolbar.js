import './Toolbar.css';
import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className="Toolbar">
        <div>MENU</div>
        <div className="Logo">
            <Logo heigth="80%" />
        </div>
        <div className="DesktopOnly">
            <NavigationItems />
        </div>
    </header >
);

export default toolbar;