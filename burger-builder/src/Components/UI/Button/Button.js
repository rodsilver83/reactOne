import React from 'react';
import css from './Button.module.css';

const button = (props) => (
  <button
    onClick={props.clicked}
    className={[css.Button, css[props.buttonType]].join(' ')}
    disabled={props.disabled}>
    {props.children}
  </button>
)

export default button;