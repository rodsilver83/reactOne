import React from 'react';
import css from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/Navigationitems';

const toolBar = (props) => (
  <header className={css.Toolbar}>
    <div>Menu</div>
    <Logo />
    <nav className={css.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolBar;