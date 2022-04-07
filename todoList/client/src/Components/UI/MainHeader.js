import classes from "./MainHeader.module.css";
import { useSelector } from "react-redux";
import { loginActions } from "../../store/login-slice";
import { useDispatch } from "react-redux";
import Button from "./Button";

const MainHeader = () => {
  const currentUser = useSelector((state) => state.login.loggedInUser);
  const isLogin = useSelector((state) => state.login.isLogin);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(loginActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Todo List</h1>
      <ul>
        {isLogin && (
          <li>
            <Button onClick={logoutHandler}>Log out</Button>
          </li>
        )}
      </ul>
    </header>
  );
};

export default MainHeader;
