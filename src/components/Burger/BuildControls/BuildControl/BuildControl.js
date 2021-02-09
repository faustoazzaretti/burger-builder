import './BuildControl.css';
import React from 'react';

const buildControl = (props) => (
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button className="Less"
            onClick={props.remove}
            disabled={props.disabled}
        >Less</button>
        <button className="More"
            onClick={props.added}
            disabled={props.disabled}
        >More</button>
    </div>
);

export default buildControl;