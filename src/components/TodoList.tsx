const TodoList = ({
  todos,
  deleteTodo,
}: {
  todos: string[];
  deleteTodo: (index: number) => void;
}) => (
  <div className="w-full text-center">
    <h1>Todo List</h1>
    <ul className="  ">
      {todos.map((todo, index) => (
        <li className="flex justify-between " key={index}>
          {todo}
          <button className="text-red-600" onClick={() => deleteTodo(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default TodoList;
