import { atom } from "recoil";

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

// Function to load todos from local storage
const loadTodos = (): TodoItem[] => {
  const todosJson = localStorage.getItem("atomTodos");
  if (todosJson) {
    return JSON.parse(todosJson);
  }
  return [];
};

export const todosState = atom<TodoItem[]>({
  key: "todosState",
  default: loadTodos(), // Initialize state with todos from local storage
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      // Load the initial state from local storage
      const savedTodos = loadTodos();
      if (savedTodos.length) {
        setSelf(savedTodos);
      }

      // Save to local storage on state change
      onSet((newTodos) => {
        localStorage.setItem("atomTodos", JSON.stringify(newTodos));
      });
    },
  ],
});
