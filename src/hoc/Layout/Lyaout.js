import React, { Component } from "react";
import Header from "../../components/Header/Header";
import classes from "./Layout.module.css";

 class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <Header />
      </div>
    );
  }
}

export default Layout
