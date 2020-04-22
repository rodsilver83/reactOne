import React from 'react';
import css from './Spinner.module.css';

const spinner = () => (
  <div className={css.LoaderContainer}>
    <div className={css.Loader}>Loading...</div>
  </div>
);

export default spinner;
