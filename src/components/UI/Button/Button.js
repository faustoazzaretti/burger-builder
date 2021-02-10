import './Button.css';
import React from 'react';

const button = (props) => (
    <button
        className="Button Success"
        onClick={props.clicked}>{props.children}</button>
);

export default button;