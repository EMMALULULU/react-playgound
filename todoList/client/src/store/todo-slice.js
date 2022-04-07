import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {},
  reducers: {
    addTodo(state, action) {
      const newTodo = action.payload;
      state[newTodo.id] = newTodo;
    },
    removeTodo(state, action) {
      const id = action.payload;
      delete state[id];
    },

    editTodo(state, action) {
      const { currentId, newTask } = action.payload;
      console.log(newTask);
      state[currentId].task = newTask;
    },
    completeTodo(state, action) {
      const todoId = action.payload;

      state[todoId].isComplete = !state[todoId].isComplete;
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
