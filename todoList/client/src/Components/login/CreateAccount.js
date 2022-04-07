import React from "react";
import Title from "../Title";
import classes from "./LoginForm.module.css";

export default function LoginForm() {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Title title="Login your account" />
        <form>
          <div>
            <input className={classes.input} placeholder="username" />
          </div>
          <div>
            <input className={classes.input} placeholder="password" />
          </div>
          <button className={classes.button}>Login</button>
          <button className={classes.button}>Create account</button>
        </form>
      </div>
    </div>
  );
}
