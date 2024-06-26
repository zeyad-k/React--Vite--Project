import EmptyStateRedux from "./EmptyStateRedux";
import {
  //   addTodo,
  deleteTodo,
  toggleComplete,
} from "../../ReduxToolkit/todoSlice";
import { RootState } from "../../ReduxToolkit/store";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const TodosListRedux = () => {
  const { t } = useTranslation("global");
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const handleToggleComplete = (id: number) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      {/* <h1>Todos List</h1> */}
      {todos.length > 0 ? (
        <ul className="mt-4 flex flex-col  gap-2 ">
          {todos.map((todo: Todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-2 bg-gray-10 rounded-md"
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
              <div className="flex items-center  gap-2">
               <button
  onClick={() => handleToggleComplete(todo.id)}
  className={`px-2 py-1 text-xs text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
    todo.completed ? "bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500" : "bg-green-500 focus:ring-green-500"
  }`}
>
  {todo.completed ? t("undo") : t("complete")}
</button>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="px-2 py-1 text-xs text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                  {t("delete")}
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <EmptyStateRedux />
      )}
    </div>
  );
};

export default TodosListRedux;
