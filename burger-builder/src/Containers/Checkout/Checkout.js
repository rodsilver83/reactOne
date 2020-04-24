import React, { Component } from "react";
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        meat: 1,
        cheese: 1,
        lettuce: 1
      }
    }
  }

  render() {
    return (<div>
      <CheckoutSummary ingredients={this.state.ingredients}></CheckoutSummary>
    </div>)
  }
}

export default Checkout;