import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../Toolbar/NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Aux from "../../../hov/Auxiliary";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {
  return (
    <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
      <div className={[classes.SideDrawer,props.open?classes.Open:classes.Close].join(' ')}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
