import { useState } from "react";
import TodoList from "./TodoList";
import TodoInputForm from "./TodoInputForm";

const TodoApp = () => {
  const [todos, setTodos] = useState<string[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const addTodo = (todo: string) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className=" flex gap-3 flex-col">
      <TodoInputForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoApp;
