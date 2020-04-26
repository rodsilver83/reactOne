import React from 'react';
import css from './Navigationitem.module.css';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => (
  <li className={css.NavigationItem}>
    <NavLink to={props.link} exact activeClassName={css.active}>
      {props.children}
    </NavLink>
  </li >
)

export default NavigationItem;