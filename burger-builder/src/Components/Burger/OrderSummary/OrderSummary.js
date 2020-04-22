import React, { Component } from 'react';
import Aux from '../../../Hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log('OrderSummary: ');
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map((key) => {
      return <li key={key}>
        <span style={{ textTransform: 'capitalize' }}>
          {key}: {this.props.ingredients[key]}
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
        <p>Total Price: <strong>${this.props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button clicked={this.props.cancel} buttonType={'Danger'}>Cancel</Button>
        <Button clicked={this.props.continue} buttonType={'Success'}>Continue</Button>
      </Aux>
    );
  }

};

export default OrderSummary;