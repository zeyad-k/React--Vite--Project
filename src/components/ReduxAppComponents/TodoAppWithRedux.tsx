import { useSelector, useDispatch } from "react-redux";
import { useState, ChangeEvent, FormEvent } from "react";
import {
  addTodo,
  deleteTodo,
  toggleComplete,
} from "../../ReduxToolkit/todoSlice";
import { RootState } from "../../ReduxToolkit/store";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoAppWithRedux = () => {
  const [text, setText] = useState<string>("");
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleToggleComplete = (id: number) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <form className="flex items-center space-x-2" onSubmit={handleAddTodo}>
          <input
            type="text"
            className="flex-1 p-2 border-2 border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={text}
            onChange={handleInputChange}
            placeholder="Add a new todo..."
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Add
          </button>
        </form>
        {todos.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {todos.map((todo: Todo) => (
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
                  <button
                    onClick={() => handleToggleComplete(todo.id)}
                    className="px-2 py-1 text-xs text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  >
                    {todo.completed ? "Undo" : "Complete"}
                  </button>
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="px-2 py-1 text-xs text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-4 text-center text-gray-500">
            No todos yet. Add a new one above!
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoAppWithRedux;
