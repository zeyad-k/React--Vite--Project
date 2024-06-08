const TodoList = ({ todos }: { todos: string[] }) => (
  <div>
    <h1>Todo List</h1>
    <ul className=" text-red-600 text-center">
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  </div>
);

export default TodoList;
