import React, { Component } from "react";
import Aux from "../../Hoc/Aux";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  onion: 0.5,
  tomato: 0.5,
  lettuce: 0.5,
  bacon: 1,
  cheese: 1,
  meat: 2,
}

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        onion: 0,
        tomato: 0,
        lettuce: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
      totalPrice: 4
    };
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updateCount;
    const priceAdd = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAdd;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updateCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updateCount;
    const priceAdd = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAdd;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  }
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls
          ingredientAdd={this.addIngredientHandler}
          ingredientRemove={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          price={this.state.totalPrice} />
      </Aux>
    );
  }
}

export default BurgerBuilder;