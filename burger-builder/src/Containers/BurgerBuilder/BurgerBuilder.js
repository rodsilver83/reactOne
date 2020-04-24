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

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: null,
      totalPrice: 4,
      purchasable: false,
      purchasing: false,
      loading: false,
      error: null
    };
  }

  componentDidMount = () => {
    axios.get('https://reactburgerbuilder-31ed5.firebaseio.com/ingredients.json')
      .then((res) => {
        const purchasable = Object.keys(res.data).reduce((prev, item) => {
          return prev + res.data[item];
        }, 0) > 0;
        this.setState({ ingredients: res.data, purchasable: purchasable })
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
    this.setState({ loading: true });
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
      .then(response => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch(error => {
        this.setState({ loading: false, purchasing: false });
      });
    this.props.history.push('/checkout');
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