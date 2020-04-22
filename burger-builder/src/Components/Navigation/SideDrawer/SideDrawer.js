import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/Navigationitems';
import css from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../Hoc/Aux/Aux';

const SideDrawer = (props) => {
  const sideDrawerClasses = [
    css.SideDrawer
  ];
  if (props.open) {
    sideDrawerClasses.push(css.Open);
  } else {
    sideDrawerClasses.push(css.Close);
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={sideDrawerClasses.join(' ')}>
        <div className={css.Logo}>
          <Logo toggle={props.toggle} />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
}

export default SideDrawer;