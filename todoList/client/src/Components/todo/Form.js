import React, { useState } from "react";
import { todoActions } from "../../store/todo-slice";
import { useDispatch } from "react-redux";

export default function Form() {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      task,
      id: Math.random(),
      isComplete: false,
    };
    dispatch(todoActions.addTodo(newTodo));
    setTask("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter a todo..."
        className="task-input"
        value={task}
        onChange={changeHandler}
      />
      <button className="button-add">Add</button>
    </form>
  );
}
