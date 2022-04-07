import React, { useState } from "react";
import Form from "./Form";

import { useSelector } from "react-redux";

export default function Login() {
  // const isInLogin = useSelector((state) => state.login.isInLogin);

  const registerHandler = () => {};
  return (
    <div>
      <Form type={"Login"} title={"Log in your account"}></Form>
    </div>
  );
}
