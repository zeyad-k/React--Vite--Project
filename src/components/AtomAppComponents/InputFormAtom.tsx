import { useState, FormEvent, ChangeEvent } from "react"; // Import ChangeEvent
import { useSetRecoilState } from "recoil";
import { todosState } from "../../Atom/todoAtom";
import { useTranslation } from "react-i18next";

const InputFormRecoil = () => {
  const [text, setText] = useState("");
  const setTodos = useSetRecoilState(todosState);
  const { t } = useTranslation("global");

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    if (text) {
      setTodos((oldTodos) => [
        ...oldTodos,
        { id: Date.now(), text, completed: false },
      ]);
      setText("");
    }
  };

  // Define handleInputChange function
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleAddTodo}>
      <input
        type="text"
        className="flex-1 p-2 border-2 border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={text}
        onChange={handleInputChange} // Use the defined function
        placeholder={t("Add a new todo...")}
      />
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {t("add")}
      </button>
    </form>
  );
};

export default InputFormRecoil;
