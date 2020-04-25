import React, { Component } from "react";
import Button from '../../../Components/UI/Button/Button';
import css from './ContactData.module.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      zipCode: ''
    }
  }

  orderHandler = (event) => {
    event.preventDefault();
    console.log('CD: ', this.props);
  }

  render() {
    return (
      <div className={css.ContactData}>
        <h4>Entry your Contact Data</h4>
        <form>
          <input placeholder="Name" type="text" />
          <input placeholder="Email" type="email" />
          <input placeholder="Street" type="text" />
          <input placeholder="ZipCode" type="text" />
          <Button buttonType="Success" clicked={(event) => this.orderHandler(event)}>Order</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;