import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { usersData: {}, isLogin: false, loggedInUser: {} },
  reducers: {
    createAccount(state, action) {
      const { username, password } = action.payload;
      state.usersData[username] = password;
      console.log(state.usersData);
    },
    setLogin(state, action) {
      state.isLogin = true;
      const { currentUsername, currentPassword } = action.payload;
      state.loggedInUser.username = currentUsername;
      state.loggedInUser.password = currentPassword;
      console.log(state.loggedInUser);
    },
    logout(state) {
      state.isLogin = false;
      state.loggedInUser = {};
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice;
