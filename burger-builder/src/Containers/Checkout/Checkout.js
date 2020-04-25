import React, { Component } from "react";
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from "./ContactData/ContactData";

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

  componentDidMount = () => {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
      ingredients[param[0]] = param[1];
    }
    this.setState({ ingredients: ingredients });
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  render() {
    return (<div>
      <CheckoutSummary ingredients={this.state.ingredients}
        checkoutCancelled={this.checkoutCancelledHandler}
        checkoutContinued={this.checkoutContinuedHandler}>
      </CheckoutSummary>
      <Route path={this.props.match.path + '/contact-data'}
        render={() => <ContactData ingredients={this.state.ingredients}></ContactData>}></Route>
    </div>)
  }
}

export default Checkout;