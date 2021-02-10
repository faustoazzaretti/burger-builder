import './BuildControls.css';
import React from 'react';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => (
    <div className="BuildControls">
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctlr => {
            return (
                <BuildControl
                    key={ctlr.label}
                    label={ctlr.label}
                    type={ctlr.type}
                    added={() => props.ingredientAdded(ctlr.type)}
                    remove={() => props.ingredientRemove(ctlr.type)}
                    disabled={props.disabled[ctlr]}
                />)
        })}
        <button
            className="OrderButton"
            disabled={!props.purchase}
        >ORDER NOW!!!</button>
    </div>
);

export default buildControls;