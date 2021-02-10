import React from 'react';
import Aux from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}><span style={{ textTransform: 'capitalize' }}> {igKey}</span>: {props.ingredients[igKey]}</li>
            )
        });
    return (
        < Aux >
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to checkout?</p>
            <Button clicked={props.purchaseCancel}>CANCEL</Button>
            <Button clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux >
    )
}

export default orderSummary;