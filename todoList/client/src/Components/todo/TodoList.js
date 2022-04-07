import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
export default function TodoList() {
  const todos = useSelector((state) => state.todo);

  const todolist = [];
  console.log(todos);
  for (let key in todos) {
    const todo = todos[key];

    todolist.push(
      <TodoItem
        key={todo.id}
        task={todo.task}
        isComplete={todo.isComplete}
        id={todo.id}
      />
    );
  }
  return <div>{todolist}</div>;
}
