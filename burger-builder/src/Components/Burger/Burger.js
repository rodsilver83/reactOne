import React from 'react';
import css from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
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