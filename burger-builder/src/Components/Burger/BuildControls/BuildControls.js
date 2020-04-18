import React from 'react';
import css from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

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
    <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
    {controls.map(control => (
      <BuildControl
        key={control.label}
        label={control.label}
        add={() => props.ingredientAdd(control.type)}
        remove={() => props.ingredientRemove(control.type)}
        disabled={props.disabledInfo[control.type]}
      />
    ))}
    <button
      onClick={props.ordered}
      disabled={!props.purchasable}
      className={css.OrderButton}>
      Order now {!props.pruchasable}
    </button>
  </div>
);

export default buildControls;
