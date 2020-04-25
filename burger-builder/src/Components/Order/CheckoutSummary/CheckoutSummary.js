import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import css from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
  return (
    <div className={css.CheckoutSummary}>
      <h1>We hope it tastes well</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients}></Burger>
      </div>
      <Button buttonType="Danger"
        clicked={props.checkoutCancelled}>Cancel</Button>
      <Button buttonType="Success"
        clicked={props.checkoutContinued}>Continue</Button>
    </div>
  )
}

export default checkoutSummary;