import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo-slice";
import loginSlice from "./login-slice";

const store = configureStore({
  reducer: { todo: todoSlice.reducer, login: loginSlice.reducer },
});
export default store;
