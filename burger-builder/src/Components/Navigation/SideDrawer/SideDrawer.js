import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/Navigationitems';
import css from './SideDrawer.module.css';

const SideDrawer = (props) => {
  // ...
  return (
    <div className={css.SideDrawer}>
      <div className={css.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
}

export default SideDrawer;