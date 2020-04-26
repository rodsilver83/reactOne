import React, { Component } from "react";
import Order from './Order/Order';
import axios from "../../axios-orders";
import withErrorHandler from "../../Hoc/WithError/WithError";
import css from './Orders.module.css';
import Spinner from "../../Components/UI/Spinner/Spinner";

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  }
  componentDidMount = () => {
    axios.get('/order.json').then((res) => {
      const orders = [];
      for (let key in res.data) {
        orders.push({ ...res.data[key], id: key });
      }
      this.setState({ loading: false, orders: orders })
    })
      .catch((res) => {
        this.setState({ loading: false })
      })
  }

  render() {
    return (
      <div className={css.Orders}>
        {this.state.loading ?
          <Spinner></Spinner> :
          this.state.orders.map((order) => (
            <Order {...order} key={order.id}></Order>
          ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios)