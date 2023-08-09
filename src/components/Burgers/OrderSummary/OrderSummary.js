import React, { Component } from "react";

import Aux from "../../../hov/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component{
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map((igKey,i)=>{
            return (<li key={i}>
                <span style={{textTransform:'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>)
        })
        return (
   <Aux>
    <h3>Your Order</h3>
    <p>a delicious burger with following ingredients </p>
    <ul>
        {ingredientSummary}
    </ul>
        <p><b>Total Price: ${this.props.price.toFixed(1)}</b></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchasedCanceled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchasedContinued}>CONTINUE</Button>
    </Aux>

        )
    } 
} 

export default OrderSummary;