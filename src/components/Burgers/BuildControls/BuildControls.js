import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", value: "salad" },
  { label: "Bacon", value: "bacon" },
  { label: "Cheese", value: "cheese" },
  { label: "Meat", value: "meat" },
];
const BuildControls = (props) => {
  
 return <div className={classes.BuildControls}>
  <h4>Current Price: ${(props.price).toFixed(1)}</h4>
    {controls.map((ctrl) => {
      return (
        <BuildControl
          disabled={props.disabled }
          added={() => props.addIngredient(ctrl.value)}
          removing={() => props.removingIngredient(ctrl.value)}
          key={ctrl.label}
          label={ctrl.label}
        />
      );
    })}
    <button onClick={props.ordering} className={classes.OrderButton } disabled={!props.check}>ORDER NOW</button>
  </div>
};

export default BuildControls;
