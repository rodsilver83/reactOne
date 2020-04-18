import React from 'react';
import css from './Navigationitems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
  <ul className={css.NavigationItems}>
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/">
      Checkout Order
    </NavigationItem>
  </ul>
)

export default NavigationItems;