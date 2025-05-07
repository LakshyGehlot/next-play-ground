// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slices/todoSlice";

export const createStore = () => {
  return configureStore({
    reducer: {
      todos: todosReducer,
    },
  });
};

export type AppStore = ReturnType<typeof createStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
