import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            );
        });
    return <Aux>
                <h3>Your Order</h3>
                <p>A burger with the following ingredients: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price is: {props.price.toFixed(2)}</strong></p>
                <p>Continue or checkout?</p>
                <Button clicked={props.purchanseCanceled} btnType="Danger">Cancel</Button>
                <Button clicked={props.purchaseContinued} btnType="Success">Continue</Button>
            </Aux>
};

export default orderSummary;