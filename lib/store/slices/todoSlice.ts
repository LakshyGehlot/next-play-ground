import { createSlice } from "@reduxjs/toolkit";
import { TodoState } from "@/lib/types";

const initialState: TodoState[] = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action: { payload: TodoState[] }) => {
      return action.payload;
    },

    addTodo: (state, action: { payload: TodoState }) => {
      state.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
      return state;
    },

    removeTodo: (state: TodoState[], action: { payload: number }) => {
      const newstate = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(newstate));
      return newstate;
    },

    toggleTodo: (state: TodoState[], action: { payload: number }) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },

    updateTodo: (state: TodoState[], action: { payload: TodoState }) => {
      const todo = state.find((elem) => elem.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
        todo.description = action.payload.description;
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },
  },
});

export const { setTodos, addTodo, removeTodo, toggleTodo, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
