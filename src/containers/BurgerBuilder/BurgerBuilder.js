import React, { Component } from "react";
import Aux from "../../hov/Auxiliary";
// import Burger "../../components/Burgers/Burger";
import Burger from "../../components/Burgers/Burger";
import BuildControls from "../../components/Burgers/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burgers/OrderSummary/OrderSummary";

const INGREDIENTS_PRICES = {
  salad: 0.5,
  bacon: 0.6,
  meat: 1.7,
  cheese: 0.4,
};

export default class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        bacon: 0,
        salad: 0,
        meat: 0,
        cheese: 0,
      },
      totalPrice: 4,
      purchaseAble: false,
      purchasing: false,
    };
  }

  checkPurchaseAbleHandler(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igkey) => {
        return ingredients[igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchaseAble: sum > 0 });
    console.log(this.sum);
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredient = { ...this.state.ingredients };

    updatedIngredient[type] = updatedCount;
    const updatedPrice = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + updatedPrice;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredient });
    this.checkPurchaseAbleHandler(updatedIngredient);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredient = { ...this.state.ingredients };

    updatedIngredient[type] = updatedCount;
    const oldPrice = this.state.totalPrice;
    const updatedPrice = INGREDIENTS_PRICES[type];
    const newPrice = oldPrice - updatedPrice;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredient });
    this.checkPurchaseAbleHandler(updatedIngredient);
  };

  purchaseCancelHanlder = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert("YOu are continued! ThankFully ");
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
    // console.log(this.state.purchasing)
  };

  render() {
    const disabledInfo = {
      salad: false,
      bacon: false,
      cheese: false,
      meat: false,
    };
    for (let key in this.state.ingredients) {
      disabledInfo[key] = this.state.ingredients[key] <= 0;
    }

    return (
      <Aux>
        <Burger
          ingredients={this.state.ingredients}
          disabled={this.disabledInfo}
        />
        <Modal
          modalClosed={this.purchaseCancelHanlder}
          show={this.state.purchasing}
        >
          <OrderSummary
            purchasedContinued={this.purchaseContinueHandler}
            price={this.state.totalPrice}
            purchasedCanceled={this.purchaseCancelHanlder}
            ingredients={this.state.ingredients}
          />
        </Modal>
        <BuildControls
          removingIngredient={this.removeIngredientHandler}
          price={this.state.totalPrice}
          check={this.state.purchaseAble}
          addIngredient={this.addIngredientHandler}
          ordering={this.purchaseHandler}
        />
      </Aux>
    );
  }
}
