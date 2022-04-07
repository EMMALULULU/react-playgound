import React, { useState } from "react";
import { todoActions } from "../../store/todo-slice";
import { useDispatch } from "react-redux";

export default function Todo({ task, isComplete, id }) {
  const [currentTask, setCurrentTask] = useState(task);
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setCurrentTask(e.target.value);
  };

  const completeHandler = () => {
    dispatch(todoActions.completeTodo(id));
  };

  const editHandler = () => {
    dispatch(todoActions.editTodo({ currentId: id, newTask: currentTask }));
  };

  const deleteHandler = () => {
    dispatch(todoActions.removeTodo(id));
  };
  return (
    <li className={isComplete ? "complete" : "list-item"}>
      <input
        type="text"
        className="list"
        value={currentTask}
        onChange={changeHandler}
      />
      <div>
        <button
          className="button-complete task-button"
          onClick={completeHandler}
        >
          <i className="fa fa-check-circle"></i>
        </button>

        <button className="button-edit task-button" onClick={editHandler}>
          <i className="fa fa-edit"></i>
        </button>

        <button className="button-delete task-button" onClick={deleteHandler}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
