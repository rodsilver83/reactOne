import React from 'react';
import css from './Input.module.css';

const Input = (props) => {
  let inputElement = null;
  switch (props.type) {
    case 'text':
      inputElement = <input className={css.InputElement} type="text" {...props}></input>
      break;
    default:
      inputElement = <input className={css.InputElement} type="text" {...props}></input>
      break;
  }
  return (
    <div className={css.Input}>
      <label className={css.Label}>{props.label}</label>
      {inputElement}
    </div>
  )
}

export default Input;