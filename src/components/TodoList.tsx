const TodoList = ({
  todos,
  deleteTodo,
}: {
  todos: string[];
  deleteTodo: (index: number) => void;
}) => (
  <div>
    <h1>Todo List</h1>
    <ul className="text-red-600 text-center">
      {todos.map((todo, index) => (
        <li className="flex justify-between " key={index}>
          {todo}
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default TodoList;
