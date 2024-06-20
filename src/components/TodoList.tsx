const TodoList = ({
  todos,
  deleteTodo,
  setEditIndex,
  toggleTodo,
}: {
  todos: { text: string; completed: boolean }[];
  deleteTodo: (index: number) => void;
  setEditIndex: (index: number) => void;
  toggleTodo: (index: number) => void;
}) => (
  <div className="w-full text-center">
    <h1>Todo List</h1>
    <ul className="  ">
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
              Delete
            </button>
            <button
              className="text-blue-600"
              onClick={() => setEditIndex(index)}
            >
              Edit
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default TodoList;
