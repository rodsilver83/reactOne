import React from 'react';
import css from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const INGREDIENTS_ORDER = {
  onion: 0,
  tomato: 1,
  lettuce: 2,
  bacon: 3,
  cheese: 4,
  meat: 5,
}

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .sort((a, b) => {
      return INGREDIENTS_ORDER[a] - INGREDIENTS_ORDER[b];
    }).map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />
      });
    })
    .reduce((prev, current) => {
      return prev.concat(current);
    }, []);

  return (
    <div className={css.burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients.length === 0 ?
        <p>Start adding some ingredients</p> :
        transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default burger;