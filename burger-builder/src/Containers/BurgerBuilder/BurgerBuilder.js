import React, { Component } from "react";
import Aux from "../../Hoc/Aux";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
  onion: 0.25,
  tomato: 0.35,
  lettuce: 0.3,
  bacon: 1.25,
  cheese: 1,
  meat: 2.5,
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
      totalPrice: 4,
      purchasable: false,
      purchasing: true
    };
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients).reduce((prev, current) => {
      return prev + ingredients[current];
    }, 0);
    this.setState({ purchasable: sum > 0 });
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
    this.updatePurchaseState(updatedIngredients);
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
    this.updatePurchaseState(updatedIngredients);
  }

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  }

  continuePurchaseHandler = () => {
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice.toFixed(2),
      cutomer: {
        name: 'Lalo Landa',
        address: {
          street: 'Test Street',
          zipCode: '00001',
          country: 'London'
        },
        email: '123@test.com',
        deliveryMethod: 'Fastest'
      }
    }
    axios.post('/order.json', order)
      .then(response => console.log(response))
      .catch(error => console.log(error));
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
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            cancel={this.purchaseCancelHandler}
            continue={this.continuePurchaseHandler}
            price={this.state.totalPrice} />
        </Modal>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls
          ingredients={this.state.ingredients}
          ingredientAdd={this.addIngredientHandler}
          ingredientRemove={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchasingHandler} />
      </Aux>
    );
  }
}

export default BurgerBuilder;