import { useTranslation } from "react-i18next";

interface Todo {
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (index: number) => void;
  toggleTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  deleteTodo,
  toggleTodo,
}) => {
  const { t } = useTranslation("global"); // Moved inside the component

  return (
    <div className="w-full text-center">
      <h1>{t("Todo List")}</h1>
      <ul>
        {todos.map((todo, index) => (
          <li
            className={`flex justify-between ${
              todo.completed ? "line-through" : ""
            }`}
            key={index}
          >
            <span className="flex gap-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(index)}
              />
              {todo.text}
            </span>
            <div className="flex gap-2">
              <button className="text-red-600" onClick={() => deleteTodo(index)}>
                {t("delete")}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;