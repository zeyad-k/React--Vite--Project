// import { createSlice } from "@reduxjs/toolkit";

// const todoSlice = createSlice({
//   name: "todos",
//   initialState: [],
//   reducers: {
//     addTodo: (state, action) => {
//       const newTodo = {
//         id: Date.now(),
//         text: action.payload,
//         completed: false,
//       };
//       state.push(newTodo);
//     },
//     toggleComplete: (state, action) => {
//       const todo = state.find((todo) => todo.id === action.payload);
//       if (todo) {
//         todo.completed = !todo.completed;
//       }
//     },
//     deleteTodo: (state, action) => {
//       const index = state.findIndex((todo) => todo.id === action.payload);
//       if (index !== -1) {
//         state.splice(index, 1);
//       }
//     },
//   },
// });
// export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
// export default todoSlice.reducer;



import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the todo items
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

// Define the initial state type
type TodosState = Todo[];

const initialState: TodosState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Use PayloadAction to specify the action payload type
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleComplete: (state, action: PayloadAction<number>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;