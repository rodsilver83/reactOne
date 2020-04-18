import React from 'react';
import BurgerLogo from '../../assets/images/burgerIcon.png';
import css from './Logo.module.css';

const Logo = (props) => (
  <div className={css.Logo}>
    <img src={BurgerLogo} alt='My Burger'></img>
  </div>
)

export default Logo;