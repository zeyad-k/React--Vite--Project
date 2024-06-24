import { useState } from "react";
import TodoList from "./TodoList";
import TodoInputForm from "./TodoInputForm";

interface Todo {
  text: string;
  completed: boolean;
}

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const addTodo = (todo: string) => {
    const newTodos = [...todos, { text: todo, completed: false }];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const toggleTodo = (index: number) => {
    const newTodos = todos.map((todo, todoIndex) =>
      todoIndex === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className="flex gap-3 flex-col">
      <TodoInputForm addTodo={addTodo} />
      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ) : (
        <p className="text-center">No todos yet. Add some!</p>
      )}
    </div>
  );
};

export default TodoApp;
