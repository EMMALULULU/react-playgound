import "./App.css";
import Todo from "./Components/todo/Todo";
import Layout from "./Components/UI/Layout";
import Login from "./Components/login/Login";
import { useSelector } from "react-redux";
function App() {
  const isLogin = useSelector((state) => state.login.isLogin);
  return (
    <Layout>
      {!isLogin && <Login />}
      {isLogin && <Todo />}
    </Layout>
  );
}

export default App;
