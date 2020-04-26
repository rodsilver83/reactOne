import React from 'react'
import css from './Order.module.css';

const order = (props) => {
  const ingredients = [];
  for (let ingredientsName in props.ingredients) {
    ingredients.push({
      name: ingredientsName,
      amount: props.ingredients[ingredientsName]
    })
  }

  const ingredientOut = ingredients.map((ing, index) => {
    if (ing.amount > 0) {
      return <span key={index} className={css.Ingredient}>{ing.name}: {ing.amount}</span>
    } else {
      return null;
    }
  })
  return (
    <div className={css.Order}>
      <p>Ingredients:</p>
      {ingredientOut}
      <p className={css.Price}>Price: <strong>USD ${Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
  )
}

export default order