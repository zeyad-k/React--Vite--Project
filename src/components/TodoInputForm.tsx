import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS


interface TodoInputFormProps {
  addTodo: (todo: string) => void;
}

const TodoInputForm: React.FC<TodoInputFormProps> = ({ addTodo }) => {
  const [input, setInput] = useState<string>("");
  const { t } = useTranslation("global");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) {
      toast.error(t("You can not add empty task."),); // Display error toast for empty input
      return;
    }
    addTodo(input);
    setInput("");
    toast.success(t("Task added successfully!")); // Display success toast
  };

  return (
    <>
      <form className="flex gap-5" onSubmit={handleSubmit}>
        <input
          className="bg-slate-200 px-2 py-1"
          type="text"
          value={input}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          {t("add")}
        </button>
      </form>
      <ToastContainer /> {/* Add ToastContainer to render toasts */}
    </>
  );
};

export default TodoInputForm;
