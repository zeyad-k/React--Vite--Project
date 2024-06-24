import { configureStore, Middleware } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

// Function to load the todos state from local storage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('reduxTodos');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Failed to load todos from local storage:", e);
    return undefined;
  }
};

// Middleware to save the todos state to local storage on changes
const saveToLocalStorage: Middleware = store => next => action => {
  const result = next(action);
  const state = store.getState();
  try {
    const serializedState = JSON.stringify(state.todos);
    localStorage.setItem('reduxTodos', serializedState);
  } catch (e) {
    console.warn("Failed to save todos to local storage:", e);
  }
  return result;
};

// Configure store with the middleware and initial state loaded from local storage
const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saveToLocalStorage),
  preloadedState: {
    todos: loadFromLocalStorage(),
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;