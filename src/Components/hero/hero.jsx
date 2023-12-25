import React from "react";
import classes from "./hero.module.css";
import logo from "../../../src/assets/images/logo.svg";

export default function Hero() {
  return (
    <div className={classes.container}>
      <div className={classes.kidtainer}>
        <div className={classes.logo}>
          <img src={logo} />
        </div>
        <div className={classes.body}>
          <div className={classes.header}>
            <h1>Body Mass <br/>Index Calculator</h1>
          </div>
          <div className={classes.info}>
            <p>Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight,
             it offers a valuable starting point to evaluate your overall health and well-being.
             </p>
          </div>
        </div>
      </div>
      <div className={classes.calculator}>
       hello
      </div>
    </div>
  );
}
