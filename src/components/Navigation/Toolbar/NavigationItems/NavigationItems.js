import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
  return (
    // <div>
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" >Burger Builder</NavigationItem>
      <NavigationItem link="/"  active>CheckOut</NavigationItem>
    </ul>
    // </div>
  );
};

export default NavigationItems;
