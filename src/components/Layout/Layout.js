import React, { Component } from "react";
import Auxiliary from "../../hov/Auxiliary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = ()=>{
    this.setState({showSideDrawer: false});
  }
  
  sideDrawerToggleHandler = ()=>{
  this.setState((prevState)=>{
    return {
      showSideDrawer: !prevState.showSideDrawer
    }
  })
  
  }  
  

  render() {
    return (
      <Auxiliary>
        <div className={classes.content}>
          <Toolbar clicked={this.sideDrawerToggleHandler}/>
          <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        </div>
        <main>{this.props.children}</main>
      </Auxiliary>
    );
  }
}

export default Layout;
