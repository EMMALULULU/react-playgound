import React from "react";
import Title from "../Title";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Title title="Your focus for today" />
        </div>
        <div>
          <Form />
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    </div>
  );
}
