import './Toolbar.css';
import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToogle from '../SideDrawer/DrawerToogle/DrawerToogle';

const toolbar = (props) => (
    <header className="Toolbar">
        <DrawerToogle clicked={props.drawerToogleClicked} />
        <div className="Logo">
            <Logo heigth="80%" />
        </div>
        <div className="DesktopOnly">
            <NavigationItems />
        </div>
    </header >
);

export default toolbar;