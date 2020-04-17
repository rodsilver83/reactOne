import React from 'react';
import css from './BuildControl.module.css';

const buildControl = (props) => (
  <div className={css.BuildControl}>
    <div className={css.Label}>{props.label}</div>
    <button className={css.Less}
      onClick={props.remove}
      disabled={props.disabled}>Less</button>
    <button className={css.More} onClick={props.add}>More</button>
  </div>
)

export default buildControl;
