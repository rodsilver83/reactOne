import React, { Component } from 'react';
import css from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={css.breadBottom}></div>
        break;
      case ('bread-top'):
        ingredient = <div className={css.breadTop}></div>
        break;
      case ('meat'):
        ingredient = <div className={css.meat}></div>
        break;
      case ('cheese'):
        ingredient = <div className={css.cheese}></div>
        break;
      case ('bacon'):
        ingredient = <div className={css.bacon}></div>
        break;
      case ('lettuce'):
        ingredient = <div className={css.lettuce}></div>
        break;
      case ('tomato'):
        ingredient = <div className={css.tomato}></div>
        break;
      case ('onion'):
        ingredient = <div className={css.onion}></div>
        break;
      default:
        break;
    }
    return ingredient;
  }
}

BurgerIngredient.propType = {
  type: PropTypes.string.isRequired
}

export default BurgerIngredient;
