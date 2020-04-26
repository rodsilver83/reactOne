import React, { Component } from "react";
import Aux from "../../Hoc/Aux/Aux";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import axios from '../../axios-orders';
import Spinner from '../../Components/UI/Spinner/Spinner';
import withErrorHandler from "../../Hoc/WithError/WithError";

const INGREDIENT_PRICES = {
  onion: 0.25,
  tomato: 0.35,
  lettuce: 0.3,
  bacon: 1.25,
  cheese: 1,
  meat: 2.5,
}

const BASE_PRICE = 4;

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: null,
      totalPrice: BASE_PRICE,
      purchasable: false,
      purchasing: false,
      loading: false,
      error: null
    };
  }

  componentDidMount = () => {
    axios.get('https://reactburgerbuilder-31ed5.firebaseio.com/ingredients.json')
      .then((res) => {
        const totalPrice = Object.keys(res.data).reduce((prev, item) => {
          return prev + (res.data[item] * INGREDIENT_PRICES[item]);
        }, BASE_PRICE);
        const purchasable = totalPrice > BASE_PRICE;

        this.setState({ ingredients: res.data, purchasable: purchasable, totalPrice: totalPrice })
      })
      .catch((err) => {
        this.setState({ error: err });
        console.log(err);
      });
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients).reduce((prev, current) => {
      return prev + ingredients[current];
    }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = Number.parseInt(this.state.ingredients[type]);
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
    const oldCount = Number.parseInt(this.state.ingredients[type]);
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
    const params = [];
    for (let i in this.state.ingredients) {
      params.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    }
    params.push('price=' + this.state.totalPrice);
    const queryString = params.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    });
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = <OrderSummary
      ingredients={this.state.ingredients}
      cancel={this.purchaseCancelHandler}
      continue={(event) => {
        event.stopPropagation();
        this.continuePurchaseHandler()
      }}
      price={this.state.totalPrice} />;

    if (this.state.loading) {
      orderSummary = <Spinner></Spinner>;
    }

    let burger = <Aux>
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

    if (!this.state.ingredients) {
      burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner></Spinner>
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);