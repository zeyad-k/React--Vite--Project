import {   useState } from "react";
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

  return (
    <div>
      <TodoInputForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoApp;
