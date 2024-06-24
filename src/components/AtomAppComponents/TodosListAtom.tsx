import { useRecoilState } from "recoil";
import EmptyStateAtom from "./EmptyStateAtom";
import { todosState } from "../../Atom/todoAtom";

 const ActionButton = ({
  onClick,
  label,
  className,
}: {
  onClick: () => void;
  label: string;
  className: string;
}) => (
  <button
    onClick={onClick}
    className={`px-2 py-1 text-xs text-white rounded hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${className}`}
    aria-label={label}
  >
    {label}
  </button>
);

const TodosListAtom = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  const handleToggleComplete = (id: number) => {
    setTodos((oldTodos) =>
      oldTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((oldTodos) => oldTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-2 bg-gray-50 rounded-md"
            >
              <span
                className={`flex-1 ${
                  todo.completed
                    ? "text-gray-400 line-through"
                    : "text-gray-800"
                }`}
              >
                {todo.text}
              </span>
              <div className="flex items-center space-x-2">
                <ActionButton
                  onClick={() => handleToggleComplete(todo.id)}
                  label={todo.completed ? "Undo" : "Complete"}
                  className={
                    todo.completed
                      ? "bg-green-500 focus:ring-green-500"
                      : "bg-blue-500 focus:ring-blue-500"
                  }
                />
                <ActionButton
                  onClick={() => handleDeleteTodo(todo.id)}
                  label="Delete"
                  className="bg-red-500 focus:ring-red-500"
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <EmptyStateAtom />
      )}
    </div>
  );
};

export default TodosListAtom;
