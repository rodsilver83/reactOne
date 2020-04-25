import React from 'react';
import css from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
import Button from '../../UI/Button/Button';

const controls = [
  { label: 'Lettuce', type: 'lettuce' },
  { label: 'Tomato', type: 'tomato' },
  { label: 'Onion', type: 'onion' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (
  <div className={css.BuildControls}>
    <p className={css.Price}>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
    {controls.map(control => (
      <BuildControl
        key={control.label}
        label={control.label}
        quantity={props.ingredients[control.type]}
        add={() => props.ingredientAdd(control.type)}
        remove={() => props.ingredientRemove(control.type)}
        disabled={props.disabledInfo[control.type]}
      />
    ))}
    <Button
      buttonType="Success"
      clicked={props.ordered}
      disabled={!props.purchasable}
      className={css.OrderButton}>
      Order now
    </Button>
  </div>
);

export default buildControls;
