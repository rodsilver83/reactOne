import React from 'react';
import css from './DrawerToggle.module.css';

const DrawerToggle = (props) => (
  <div className={css.DrawerToggle}
    onClick={props.toggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default DrawerToggle;
