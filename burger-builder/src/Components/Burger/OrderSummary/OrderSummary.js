import React from 'react';
import Aux from '../../../Hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((key) => {
    return <li key={key}>
      <span style={{ textTransform: 'capitalize' }}>
        {key}: {props.ingredients[key]}
      </span>
    </li>
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout?</p>
      <Button clicked={props.cancel} buttonType={'Danger'}>Cancel</Button>
      <Button clicked={props.continue} buttonType={'Success'}>Continue</Button>
    </Aux>
  );
};

export default OrderSummary;