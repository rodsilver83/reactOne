import React from 'react';
import css from './BuildControl.module.css';

const buildControl = (props) => (
  <div className={css.BuildControl}>
    <div className={css.Label}>{props.label}</div>
    <div className={css.ButtonWrapper}>
      <button className={css.Less}
        onClick={props.remove}
        disabled={props.disabled}>-</button>
      <span className={css.quantity}>{props.quantity}</span>
      <button className={css.More} onClick={props.add}>+</button>
    </div>
  </div>
)

export default buildControl;
