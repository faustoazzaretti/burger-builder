import './Toolbar.css';
import React from 'react';
import Logo from '../../Logo/Logo';

const toolbar = (props) => (
    <header className="Toolbar">
        <div>MENU</div>
        <Logo />
        <nav>
            ...
        </nav>
    </header>
);

export default toolbar;