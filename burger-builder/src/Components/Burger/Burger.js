import React from 'react';
import css from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  return (
    <div className={css.burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="onion" />
      <BurgerIngredient type="tomato" />
      <BurgerIngredient type="bacon" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="lettuce" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default burger;