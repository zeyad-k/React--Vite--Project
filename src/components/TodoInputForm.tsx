import { useState } from "react";

const TodoInputForm = ({ addTodo }: { addTodo: (todo: string) => void }) => {
  const [input, setInput] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  };

  return (
    <form  onSubmit={handleSubmit}>
      <input className=" bg-slate-200 px-2 py-1" type="text" value={input} onChange={handleInputChange} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoInputForm;
