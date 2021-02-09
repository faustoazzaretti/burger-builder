import './BuildControls.css';
import React from 'react';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const buildControls = () => (
    <div className="BuildControls">
        {controls.map(ctlr => {
            return <BuildControl key={ctlr.label} label={ctlr.label} />
        })}
    </div>
);

export default buildControls;