import React, { useState } from "react";
import Title from "../Title";
import classes from "./Form.module.css";
import Button from "../UI/Button";
import { loginActions } from "../../store/login-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Form({ type, title }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usersData = useSelector((state) => state.login.usersData);
  const dispatch = useDispatch();

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const createAccountHandler = (e) => {
    e.preventDefault();
    dispatch(loginActions.createAccount({ username, password }));
    setPassword("");
    setUsername("");
    alert("successful register, please login");
  };

  const loginHandler = (e) => {
    e.preventDefault();

    if (!usersData[username]) {
      alert("invalid username");
      setPassword("");
      setUsername("");
      return;
    }
    if (usersData[username] !== password) {
      alert("invalid password");
      setPassword("");
      setUsername("");
      return;
    }
    alert("login success");
    dispatch(loginActions.setLogin({ username, password }));
  };
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Title title={title} />
        <form>
          <div>
            <input
              className={classes.input}
              placeholder="username"
              value={username}
              onChange={usernameChangeHandler}
            />
          </div>
          <div>
            <input
              className={classes.input}
              placeholder="password"
              value={password}
              type="password"
              onChange={passwordChangeHandler}
            />
          </div>
          <Button className={classes.button} onClick={loginHandler}>
            {type}
          </Button>
          {type === "Login" && (
            <Button onClick={createAccountHandler}>Create account</Button>
          )}
        </form>
      </div>
    </div>
  );
}
