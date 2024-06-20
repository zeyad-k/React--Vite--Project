import { useState, useEffect } from "react";

const TodoInputForm = ({ addTodo, editTodo, editIndex, todos }: { addTodo: (todo: string) => void, editTodo: (index: number, newTodo: string) => void, editIndex: number | null, todos: string[] }) => {
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    if (editIndex !== null) {
      setInput(todos[editIndex]);
    }
  }, [editIndex, todos]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    if (editIndex !== null) {
      editTodo(editIndex, input);
    } else {
      addTodo(input);
    }
    setInput("");
  };

  return (
    <form  className="flex gap-5" onSubmit={handleSubmit}>
      <input className=" bg-slate-200 px-2 py-1" type="text" value={input} onChange={handleInputChange} />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">{editIndex !== null ? "Edit" : "Add"}</button>
    </form>
  );
};

export default TodoInputForm;