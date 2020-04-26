import React, { Component } from "react";
import Button from '../../../Components/UI/Button/Button';
import css from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../Components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      zipCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    console.log(this.props);
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      cutomer: {
        name: 'Lalo Landa',
        address: {
          street: 'Test Street',
          zipCode: '00001',
          country: 'London'
        },
        email: '123@test.com',
        deliveryMethod: 'Fastest'
      }
    }
    axios.post('/order.json', order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  }

  render() {
    let form = (<form>
      <input placeholder="Name" type="text" />
      <input placeholder="Email" type="email" />
      <input placeholder="Street" type="text" />
      <input placeholder="ZipCode" type="text" />
      <Button buttonType="Success" clicked={(event) => this.orderHandler(event)}>Order</Button>
    </form>
    );
    if (this.state.loading) {
      form = <Spinner></Spinner>
    }
    return (
      <div className={css.ContactData}>
        <h4>Entry your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;